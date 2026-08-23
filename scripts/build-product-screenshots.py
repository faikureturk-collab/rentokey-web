#!/usr/bin/env python3
"""Build privacy-safe product screenshots without regenerating the UI."""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


REGULAR_FONT = "/System/Library/Fonts/Supplemental/Arial.ttf"
BOLD_FONT = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(BOLD_FONT if bold else REGULAR_FONT, size=size)


def cover_text(
    image: Image.Image,
    draw: ImageDraw.ImageDraw,
    box: tuple[int, int, int, int],
    text: str,
    *,
    sample: tuple[int, int],
    position: tuple[int, int],
    size: int,
    color: tuple[int, int, int],
    bold: bool = False,
    solid_fill: tuple[int, int, int] | None = None,
) -> None:
    width = box[2] - box[0] + 1
    height = box[3] - box[1] + 1
    if solid_fill is not None:
        draw.rectangle(box, fill=solid_fill)
    else:
        # Copy a clean vertical strip from the same native UI surface. This retains
        # subtle gradients and avoids visible solid-color retouch rectangles.
        strip = image.crop((sample[0], box[1], sample[0] + 1, box[3] + 1))
        patch = strip.resize((width, height), Image.Resampling.NEAREST)
        image.paste(patch, (box[0], box[1]))
    draw.text(position, text, font=font(size, bold), fill=color)


def build_desktop(source: Path, output: Path) -> None:
    image = Image.open(source).convert("RGB")
    if image.size != (1905, 1072):
        raise ValueError(f"Unexpected desktop screenshot size: {image.size}")
    draw = ImageDraw.Draw(image)

    # Tenant identity.
    draw.rectangle((58, 24, 194, 60), fill=image.getpixel((180, 52)))
    draw.text((61, 25), "Rent Okey Demo", font=font(16, True), fill=(255, 255, 255))
    draw.text((61, 45), "Örnek çalışma alanı", font=font(9), fill=(166, 185, 201))

    # Fleet plates at the left edge of the timeline.
    plate_rows = [
        (413, "34 RK 101"),
        (449, "34 RK 118"),
        (483, "34 RK 162"),
        (517, "34 RK 230"),
        (551, "34 RK 241"),
        (585, "34 RK 174"),
        (619, "34 RK 133"),
        (653, "34 RK 197"),
        (685, "34 RK 208"),
        (719, "34 RK 186"),
        (782, "34 RK 145"),
        (839, "34 RK 219"),
    ]
    for y, label in plate_rows:
        cover_text(
            image,
            draw,
            (257, y - 3, 354, y + 14),
            label,
            sample=(350, y + 2),
            position=(260, y - 2),
            size=12,
            color=(29, 40, 52),
            bold=True,
            solid_fill=(255, 255, 255),
        )

    # Reservation labels. Only the label area is repainted; bars and grid stay native.
    reservation_labels = [
        ((369, 422, 535, 437), (700, 430), (371, 423), "Selim Kaya · 16:30–23:30", 11, (255, 255, 255)),
        ((369, 456, 555, 471), (900, 463), (371, 457), "Mert Demir · 15:00–14:00", 11, (255, 255, 255)),
        ((369, 490, 440, 505), (430, 498), (371, 491), "Can Yılmaz", 9, (255, 255, 255)),
        ((452, 490, 630, 505), (800, 498), (454, 491), "Onur Acar · 14:55–13:00", 10, (24, 54, 45)),
        ((369, 523, 545, 539), (590, 531), (371, 525), "Arda Çelik · 10:00–10:00", 10, (255, 255, 255)),
        ((369, 556, 552, 572), (800, 564), (371, 558), "Burak Koç · 10:00–10:00", 10, (255, 255, 255)),
        ((369, 590, 510, 605), (510, 597), (371, 591), "Deniz Arslan · 13:46", 10, (255, 255, 255)),
        ((700, 590, 900, 605), (1100, 597), (702, 591), "Eylül Aksoy · 07:30–21:30", 10, (24, 54, 45)),
        ((782, 624, 945, 639), (1080, 631), (784, 625), "Ece Şahin · 10:00–10:00", 10, (24, 54, 45)),
        ((369, 657, 555, 672), (820, 664), (371, 658), "Emir Aydın · 16:21–10:00", 10, (255, 255, 255)),
        ((699, 690, 875, 705), (1050, 697), (701, 691), "Ece Şahin · 13:30–10:00", 10, (24, 54, 45)),
        ((369, 724, 555, 739), (900, 731), (371, 725), "Kerem Yıldız · 10:00–10:00", 10, (255, 255, 255)),
        ((369, 787, 555, 802), (900, 794), (371, 788), "Selim Kaya · 11:30–20:00", 10, (255, 255, 255)),
        ((369, 844, 555, 859), (900, 851), (371, 845), "Cansu Güneş · 10:00–10:00", 10, (255, 255, 255)),
    ]
    for box, sample, position, label, size, color in reservation_labels:
        cover_text(
            image,
            draw,
            box,
            label,
            sample=sample,
            position=position,
            size=size,
            color=color,
        )

    # Today queue and focus panel.
    queue_labels = [
        (220, "34 RK 145 · Selim Kaya"),
        (283, "34 RK 101 · Derya Şen"),
        (379, "34 RK 133 · Burak Koç"),
        (441, "34 RK 162 · Can Yılmaz"),
        (504, "34 RK 145 · Mert Demir"),
    ]
    for y, label in queue_labels:
        cover_text(
            image,
            draw,
            (1559, y - 2, 1794, y + 17),
            label,
            sample=(1820, y + 4),
            position=(1562, y),
            size=12,
            color=(28, 40, 54),
            bold=True,
            solid_fill=(255, 255, 255),
        )

    cover_text(
        image,
        draw,
        (1589, 673, 1775, 692),
        "Yeni rezervasyon · Ekonomi",
        sample=(1810, 681),
        position=(1592, 674),
        size=12,
        color=(28, 40, 54),
        bold=True,
        solid_fill=(255, 255, 255),
    )
    cover_text(
        image,
        draw,
        (1590, 780, 1785, 800),
        "34 RK 174 · Kasko",
        sample=(1810, 788),
        position=(1593, 781),
        size=12,
        color=(28, 40, 54),
        bold=True,
        solid_fill=(255, 255, 255),
    )
    cover_text(
        image,
        draw,
        (1590, 886, 1815, 906),
        "34 RK 174 · Trafik sigortası",
        sample=(1830, 895),
        position=(1593, 887),
        size=12,
        color=(28, 40, 54),
        bold=True,
        solid_fill=(255, 255, 255),
    )
    cover_text(
        image,
        draw,
        (1590, 994, 1840, 1014),
        "34 RK 197 · Emir Aydın",
        sample=(1848, 1002),
        position=(1593, 995),
        size=12,
        color=(28, 40, 54),
        bold=True,
        solid_fill=(255, 255, 255),
    )

    # Document warning in the top metric card.
    cover_text(
        image,
        draw,
        (1000, 190, 1065, 207),
        "34 RK 174",
        sample=(1110, 198),
        position=(1002, 191),
        size=9,
        color=(174, 98, 0),
    )

    output.parent.mkdir(parents=True, exist_ok=True)
    image.save(output, format="PNG", optimize=True)


def build_mobile(source: Path, output: Path) -> None:
    image = Image.open(source).convert("RGB")
    if image.size != (375, 812):
        raise ValueError(f"Unexpected mobile screenshot size: {image.size}")
    draw = ImageDraw.Draw(image)

    # Header identity.
    draw.rectangle((43, 16, 194, 52), fill=image.getpixel((180, 26)))
    draw.text((48, 17), "Rent Okey Demo", font=font(12, True), fill=(24, 36, 49))
    draw.text((48, 34), "demo@rentokey.com", font=font(8), fill=(112, 126, 141))

    # Priority card and queue records.
    cover_text(
        image,
        draw,
        (35, 203, 185, 224),
        "Yeni rezervasyon",
        sample=(260, 212),
        position=(38, 205),
        size=12,
        color=(255, 255, 255),
        bold=True,
    )
    cover_text(
        image,
        draw,
        (35, 647, 226, 665),
        "34 RK 101 · Selim Kaya",
        sample=(220, 647),
        position=(38, 649),
        size=10,
        color=(24, 36, 49),
        bold=True,
    )
    cover_text(
        image,
        draw,
        (35, 722, 220, 740),
        "34 RK 118 · Burak Koç",
        sample=(220, 722),
        position=(38, 724),
        size=10,
        color=(24, 36, 49),
        bold=True,
    )

    # Rebuild only the middle navigation cell so the primary action is exact-center.
    draw.rectangle((157, 752, 237, 811), fill=(255, 255, 255))
    draw.line((157, 763, 237, 763), fill=(220, 228, 237), width=1)
    center_x = image.width // 2
    button_box = (center_x - 24, 756, center_x + 24, 806)
    draw.rounded_rectangle(button_box, radius=14, fill=(20, 120, 236))
    draw.line((center_x - 9, 781, center_x + 9, 781), fill=(255, 255, 255), width=2)
    draw.line((center_x, 772, center_x, 790), fill=(255, 255, 255), width=2)

    # Produce a 2x asset without generative reconstruction; mild sharpening offsets resize softness.
    image = image.resize((750, 1624), Image.Resampling.LANCZOS)
    image = image.filter(ImageFilter.UnsharpMask(radius=0.8, percent=115, threshold=2))
    output.parent.mkdir(parents=True, exist_ok=True)
    image.save(output, format="PNG", optimize=True)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--desktop-source", type=Path, required=True)
    parser.add_argument("--mobile-source", type=Path, required=True)
    parser.add_argument("--output-dir", type=Path, required=True)
    args = parser.parse_args()

    build_desktop(args.desktop_source, args.output_dir / "rentokey-dashboard-desktop-v3.png")
    build_mobile(args.mobile_source, args.output_dir / "rentokey-operations-mobile-v3.png")


if __name__ == "__main__":
    main()
