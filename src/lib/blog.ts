export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; title: string; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  description: string;
  publishedAt: string;
  readingMinutes: number;
  intro: string[];
  body: Block[];
};

export type UpcomingPost = {
  category: string;
  title: string;
  excerpt: string;
};

export const posts: BlogPost[] = [
  {
    slug: "arac-teslim-iade-surecini-dijitallestirmek",
    category: "Operasyon",
    title: "Araç teslim/iade sürecini dijitalleştirmenin faydaları",
    excerpt:
      "Kağıt tutanaklardan dijital teslimat kayıtlarına geçişin operasyona sağladığı avantajlar.",
    description:
      "Kağıt teslim tutanağından fotoğraflı dijital teslim/iade kaydına geçmenin operasyona etkisi: atfedilemeyen hasar, devir süresi, personel bağımlılığı ve uyuşmazlık yönetimi.",
    publishedAt: "2026-08-28",
    readingMinutes: 12,
    intro: [
      "Teslim tutanağı, araç kiralamada en çok doldurulan ve en az işe yarayan evraktır. Her araç için doldurulur, imzalatılır, klasöre kaldırılır — ve ihtiyaç duyulduğu gün ya bulunamaz ya da bir işe yaramaz.",
      "Sorun personelin özensizliği değil. Kağıt tutanak, **doldurulduğu anda değil, ihtiyaç duyulduğu anda** çöker. O an genellikle üç hafta sonradır: bir kredi kartı itirazı gelir, bir kasko dosyası açılır ya da müşteri “o çizik zaten vardı” der.",
      "Dijitalleşmeyi bir modernleşme adımı olarak değil, **ispat gücü ve zaman kazancı** olarak düşünmek gerekir. Aşağıda bunun sahadaki karşılığı var.",
    ],
    body: [
      { type: "h2", id: "kagit-tutanak", text: "1. Kağıt tutanak bir kayıt değil, zayıf bir kanıttır" },
      {
        type: "p",
        text: "Teslim tutanağı hayatın en kötü anında doldurulur: müşterinin acelesi vardır, arkada sıra vardır, hava karanlıktır, yağmur yağmaktadır. Sonuç neredeyse her zaman aynı olur — imza alınır, form yarım kalır.",
      },
      { type: "h3", text: "Araç şeması ve çarpı işaretleri" },
      {
        type: "p",
        text: "Herkesin kullandığı araç şeması, elinizdeki en zayıf kanıttır. “Sol ön kapıda çizik” notu bir tartışmayı bitirmez, başlatır. Çiziğin uzunluğu ne kadardı? Boya derinliğine inmiş miydi? Zaten var mıydı, yoksa büyüdü mü? Şema üzerindeki bir çarpı bunların hiçbirini söylemez; tazminat tutarı ise tam olarak bunlarla belirlenir.",
      },
      { type: "h3", text: "Kağıdın kanıtlayamadığı şey: zaman" },
      {
        type: "p",
        text: "Asıl mesele şu: kağıt tutanağın **ne zaman doldurulduğunu ispat edemezsiniz.** Müşteri “siz o notu sonradan eklediniz” dediğinde elinizde söyleyecek bir şey kalmaz. Zaman damgası taşıyan, sunucuya kaydedilmiş ve müşteri tarafından o anda onaylanmış bir kaydın geriye dönük değiştirilmesi ise mümkün değildir. Fark burada.",
      },
      {
        type: "p",
        text: "Bir de basit ama pahalı bir gerçek var: kağıt tutanak ofiste bir klasörde durur. İhtiyaç duyduğunuz gün doğru formu bulmak yirmi dakika sürer ve çoğu zaman bulunamaz. Aranan kayıt bulunamıyorsa, o kayıt hiç tutulmamış demektir.",
      },

      { type: "h2", id: "atfedilemeyen-hasar", text: "2. Asıl kayıp hasar değil, atfedilemeyen hasardır" },
      {
        type: "p",
        text: "Her filo hasar alır. Kârlı olanla olmayan arasındaki fark, hasarın olup olmaması değil, **faturalanıp faturalanamamasıdır.**",
      },
      {
        type: "p",
        text: "Para genellikle şu dört yerden sızar:",
      },
      {
        type: "ul",
        items: [
          "**Küçük hasarlar.** Muafiyetin altında kalan çizikler ve ezikler. Belge olmadığı için kimseye yansıtılmaz, birikerek yıllık bakım bütçesine gömülür.",
          "**Bir sonraki teslimde fark edilen hasar.** En büyük kalem budur. Araç iade alınmış, aceleyle park edilmiş, ertesi gün başka bir müşteriye çıkarken hasar görülmüştür. Artık kimin yaptığı belli değildir; masraf şirketin üstünde kalır.",
          "**Yakıt ve kilometre farkı.** Gösterge paneli fotoğraflanmadıysa tartışma müşteri lehine biter.",
          "**Temizlik ve kullanım bedelleri.** Aşırı kirlilik, sigara, evcil hayvan tüyü. Kanıtlanamadığı için neredeyse hiç tahsil edilmez.",
        ],
      },
      {
        type: "quote",
        text: "Atfedilemeyen hasar, sizin hasarınızdır.",
      },
      {
        type: "p",
        text: "Buradan çıkan operasyonel kural nettir: iade ile kontrol arasında geçen her saat, hasarın atfedilemez hâle gelme ihtimalini artırır. Kayıt, aracın yanında ve o anda tutulmalıdır — sonra değil.",
      },

      { type: "h2", id: "fotograf-protokolu", text: "3. Fotoğraf çekmek yetmez, protokol gerekir" },
      {
        type: "p",
        text: "“Fotoğraf çekelim” demek kolaydır ve çoğu firma bunu zaten yapar. İşe yaramamasının sebebi de budur: rastgele çekilmiş fotoğraflar **karşılaştırılamaz.** Teslimde soldan, iadede sağdan çekilmiş iki fotoğrafla hiçbir şey ispat edemezsiniz. İşe yarayan şey fotoğraf değil, protokoldür.",
      },
      { type: "h3", text: "Sabit açı seti" },
      {
        type: "p",
        text: "Her teslimde ve her iadede, **aynı açılar, aynı sırayla** çekilir. Makul bir set şöyledir:",
      },
      {
        type: "ol",
        items: [
          "Dört köşeden 45 derece açıyla, aracın tamamı kadraja girecek şekilde dört kare",
          "Dört yan panel, hasarın görüneceği mesafeden",
          "Ön ve arka tampon, yakın çekim",
          "Dört jant ayrı ayrı — jant çiziği en sık tartışılan kalemdir",
          "Ön cam, taş izi için",
          "Tavan, açık otoparkta kalan araçlarda dolu ve dal izleri için",
          "İç mekân: ön koltuklar, arka koltuklar, bagaj",
          "Gösterge paneli",
        ],
      },
      { type: "h3", text: "Tek bir kare: gösterge paneli" },
      {
        type: "p",
        text: "Bu listedeki en değerli fotoğraf gösterge panelidir. **Kilometre ve yakıt seviyesi, kontak açıkken, aynı karede** görünmelidir. Bu tek fotoğraf, yakıt ve kilometre tartışmalarının neredeyse tamamını daha başlamadan bitirir.",
      },
      { type: "h3", text: "Işık, mesafe ve ölçek" },
      {
        type: "p",
        text: "Çizik, yandan gelen ışıkla görünür. Doğrudan flaş çoğu çiziği kaybeder. Islak araçta ise hiçbir şey görünmez — yağmurlu havada alınan iadelerde bunu kayda düşmek gerekir. Bir hasarı belgelerken yanına anahtar ya da bir kart koymak, boyutun sonradan tartışılmasını engeller; tazminat tutarını belirleyen şey zaten o boyuttur.",
      },
      {
        type: "callout",
        title: "Kaydı müşteriyle birlikte kapatın",
        text: "İmza almak yeterli değil. Müşterinin de aynı kaydı görüp onaylaması gerekir. Kaydın bir kopyasını teslim anında müşteriye göndermek, ileride çıkacak tartışmaların önemli bir kısmını daha doğmadan bitirir — çünkü artık “sonradan eklediniz” denemez.",
      },

      { type: "h2", id: "whatsapp", text: "4. WhatsApp’a fotoğraf atmak dijitalleşme değildir" },
      {
        type: "p",
        text: "Pek çok firma bu işi çözdüğünü düşünür: personel araç fotoğraflarını bir WhatsApp grubuna atar. Kâğıt yok, fotoğraf var, kayıt var gibi görünür. Bu yöntem hiçbir sorunu çözmez ama sizde çözülmüş olduğu hissini yaratır — asıl tehlikesi de budur.",
      },
      {
        type: "ol",
        items: [
          "**Fotoğraf sıkıştırılır.** Mesajlaşma uygulamaları görseli küçültür. Sıkışan ilk şey ince ayrıntılardır: yüzey çiziği, taş izi, jant sürtmesi. Yani ispat için çektiğiniz şey, tam olarak kaybolan şeydir.",
          "**Aranamaz.** Üç hafta sonra belirli bir plakanın belirli bir tarihteki teslim fotoğraflarını binlerce mesajın içinde bulmak pratikte imkânsızdır.",
          "**Kayıt personelin telefonundadır.** Sezonluk çalışan işten ayrıldığında ya da telefonunu değiştirdiğinde kayıt da gider.",
          "**Müşteri onayı yoktur.** Tek taraflı çekilmiş bir fotoğraf, karşı taraf itiraz ettiğinde çok daha zayıftır.",
          "**Araç kaydına bağlı değildir.** Elinizde fotoğraf vardır ama kilometre, yakıt, saat ve işlemi yapan kişi bilgisi yoktur. Fotoğraf hasarı gösterir; hasarı birine bağlayan şey ise geri kalan bilgidir.",
        ],
      },
      { type: "h3", text: "Kaydın taşıması gereken asgari bilgi" },
      {
        type: "p",
        text: "Bir teslim/iade kaydının işe yaraması için fotoğraf tek başına yetmez. Kayıtta şunlar birlikte bulunmalıdır:",
      },
      {
        type: "ul",
        items: [
          "Teslim ve iade tarihi ile **saati** — gün değil, dakika hassasiyetinde",
          "Kilometre ve yakıt seviyesi",
          "Teslim ve iade lokasyonu (şube, havalimanı, otel, adres)",
          "İşlemi yapan personel",
          "Sürücü ve varsa ikinci sürücü bilgisi",
          "Sabit protokole göre çekilmiş fotoğraf seti",
          "Müşterinin aynı kaydı gördüğüne dair onayı",
        ],
      },
      {
        type: "p",
        text: "Bu alanların hepsi tek bir kayıtta birleştiğinde, üç hafta sonra gelen herhangi bir itiraza verilecek cevap tek ekranda hazır olur. Dağınık duran fotoğraflar ve yarım tutanaklar ise ancak bir araya getirilebildikleri ölçüde işe yarar — ki genellikle getirilemezler.",
      },

      { type: "h2", id: "devir-suresi", text: "5. En büyük kazanç tartışmalarda değil, devir süresinde" },
      {
        type: "p",
        text: "Dijital teslim/iade denince akla önce hasar tartışmaları gelir. Oysa yıl sonunda daha büyük farkı yaratan şey **süredir.**",
      },
      {
        type: "p",
        text: "Kağıt akışında iş iki kez yapılır: form aracın yanında doldurulur, sonra ofiste sisteme ya da Excel’e ikinci kez girilir. Aynı bilgi iki kez yazılır, arada hata yapılır ve araç bu süre boyunca bekler.",
      },
      {
        type: "p",
        text: "Daha az fark edilen ve daha pahalı olan ikinci nokta şudur: **kağıtla çalışırken ofis, aracın döndüğünü personel içeri girdiğinde öğrenir.** Araç fiilen kullanılabilir durumdadır ama takvimde hâlâ kirada görünür. Aradaki otuz-altmış dakika, planlama açısından yok hükmündedir.",
      },
      {
        type: "callout",
        title: "Hesabı yapalım",
        text: "Teslim ve iade işlemleri kağıtla ortalama on ikişer dakika sürüyorsa ve dijital akışta altışar dakikaya iniyorsa, 40 araçlık ve araç başına ayda sekiz devir yapan bir filoda ayda yaklaşık 64 saat personel zamanı kazanılır. Bunun üstüne, aracın görünmez kaldığı süre de takvime geri döner.",
      },
      {
        type: "p",
        text: "Devir süresinin filo kapasitesini nasıl belirlediğini daha ayrıntılı ele almıştık: [Filo yönetiminde verimliliği artırmanın 5 yolu](/blog/filo-yonetiminde-verimliligi-artirmanin-5-yolu).",
      },

      { type: "h2", id: "personel", text: "6. Süreç kişiye bağlı olmaktan çıkar" },
      {
        type: "p",
        text: "Sezonluk çalışan bu sektörün gerçeğidir. Haziran’da işe alınan bir kişi Ağustos’ta en yoğun teslimleri yapar. Kağıt süreçte kaydın kalitesi tamamen o kişinin titizliğine ve tecrübesine bağlıdır; iyi personel iyi tutanak tutar, aceleci personel yarım tutanak tutar ve siz bunu ancak iş işten geçtikten sonra öğrenirsiniz.",
      },
      {
        type: "p",
        text: "Dijital akışın en az konuşulan faydası budur: **zorunlu alan mantığı.** Fotoğraflar çekilmeden işlem ilerlemiyorsa, “acelem vardı” diye bir mazeret kalmaz. Süreç, kişinin disiplinine değil, sistemin akışına bağlanır. Yeni personelin eğitim süresi de belirgin biçimde kısalır — çünkü öğretilecek şey bir alışkanlık değil, ekrandaki sıradır.",
      },

      { type: "h2", id: "uyusmazlik", text: "7. Uyuşmazlık anında ne değişir" },
      {
        type: "p",
        text: "Kaydın gerçek değeri, işlerin ters gittiği günlerde ortaya çıkar. Dört tipik durum:",
      },
      {
        type: "ul",
        items: [
          "**Kredi kartı itirazı.** Müşteri hasar bedeline itiraz ettiğinde bankanın istediği şey belgedir ve süre kısıtlıdır. Zaman damgalı, müşteri onaylı, fotoğraflı bir kayıt itirazı kazandırır; yarım doldurulmuş bir form kaybettirir.",
          "**Sigorta ve kasko süreci.** Hasarın hangi tarihte oluştuğunun belirlenmesi gerekir. Hangi kiralamada meydana geldiği gösterilemiyorsa dosya tıkanır.",
          "**Trafik cezası ve geçiş ihlalleri.** İhlalin gerçekleştiği tarihte aracın kimde olduğunu gösteren kayıt, sürecin temelidir. Teslim ve iade saatleri kayıtlıysa bu bir dakikalık iştir.",
          "**Müşteri memnuniyeti ve itibar.** Dijital kayıtla tartışma iki dakikada biter. Kağıtla üç güne yayılır, gerginleşir ve çoğu zaman olumsuz bir yorumla sonuçlanır.",
        ],
      },

      { type: "h2", id: "birikim", text: "8. Kayıtlar biriktikçe görünen şeyler" },
      {
        type: "p",
        text: "Tek tek teslimler önemlidir, ama asıl değer birikimde ortaya çıkar. Bir yıllık dijital kayıt size şunları söyler:",
      },
      {
        type: "ul",
        items: [
          "**Hangi araç kronik hasar alıyor.** Filo ortalaması bunu gizler; araç bazlı geçmiş açığa çıkarır. Bu bilgi doğrudan plaka bazlı kârlılık hesabına girer.",
          "**Hangi lokasyonda daha çok tartışma çıkıyor.** Havalimanı teslimleri mi, adrese teslimler mi? Sorun süreçte mi, ışıkta mı, acelede mi?",
          "**Hangi müşteri profili daha çok hasar üretiyor.** Depozito ve muafiyet politikanızı bu veriyle kurabilirsiniz.",
          "**Aracın satış anındaki değeri.** Bakım ve hasar geçmişi kayıtlı bir araç, ikinci elde daha rahat ve daha iyi fiyata satılır.",
        ],
      },

      { type: "h2", id: "gecis", text: "9. Kağıttan dijitale geçerken" },
      {
        type: "p",
        text: "Geçişi zorlaştıran şey teknoloji değil, hepsini birden değiştirmeye çalışmaktır. Sahada işleyen yaklaşım şudur:",
      },
      {
        type: "ol",
        items: [
          "**Tek lokasyon, tek vardiya ile başlayın.** İki hafta çalıştırın, aksayan yerleri düzeltin, sonra yayın. Tüm filoyu aynı gün geçirmek en sık yapılan hatadır.",
          "**Fotoğraf sayısını sabitleyin ve az tutun.** Otuz fotoğraf isteyen bir süreç sahada uygulanmaz; ilk yoğun günde delinir. On-on iki kare, sabit sırayla yeterlidir.",
          "**Çevrimdışı çalışabildiğinden emin olun.** Kapalı otoparkta ve havalimanı bodrumunda internet çoğu zaman yoktur. Kayıt orada tutulup sonra eşitlenebilmelidir.",
          "**Kaydın kopyasını müşteriye gönderin.** Tek başına en yüksek getirili adım budur.",
          "**Kağıdı bir ay paralel yürütün, sonra tamamen bırakın.** Paralel dönemi uzatmayın; ikili sistem hem yormaya hem de her ikisinin de yarım kalmasına yol açar.",
        ],
      },

      { type: "h2", id: "sonuc", text: "Toparlarsak" },
      {
        type: "p",
        text: "Teslim ve iade kaydını dijitalleştirmek bir evrak modernizasyonu değildir. Üç somut şeyi değiştirir: hasarı **atfedilebilir** kılar, aracın tekrar kiralanabilir hâle gelme süresini **kısaltır** ve sürecin kalitesini kişiye bağlı olmaktan **çıkarır**.",
      },
      {
        type: "p",
        text: "Ölçmek isterseniz üç sayıya bakın: bir yılda faturalanabilen hasar oranı, iade ile tekrar kiralanabilir olma arasındaki ortalama süre ve kaybedilen ödeme itirazı sayısı. Bu üç sayı, kağıt klasörünüzün size gerçekte neye mal olduğunu gösterir.",
      },
    ],
  },
  {
    slug: "filo-yonetiminde-verimliligi-artirmanin-5-yolu",
    category: "Filo Yönetimi",
    title: "Filo yönetiminde verimliliği artırmanın 5 yolu",
    excerpt:
      "Boş araç günlerini azaltmak ve filo kullanım oranını artırmak için operasyonel ipuçları.",
    description:
      "Boş araç günlerini azaltmanın ve filo kullanım oranını artırmanın beş yolu: kırık gün yönetimi, devir süresi, taban yük kurgusu, kural bazlı doluluk ve araç başına günlük gelir.",
    publishedAt: "2026-07-01",
    readingMinutes: 9,
    intro: [
      "Boş araç günü konuşulduğunda ilk akla gelen şey talep olur. Sezon kısa, rekabet yoğun, fiyatlar baskı altında. Bu tespitlerin hepsi doğru olabilir. Ama 40 araçlık bir filoda kaybedilen günlerin büyük kısmı talep yokluğundan doğmaz; atama, devir ve planlama hatalarından doğar. Kısacası araç boş kalmaz, **boş bırakılır**.",
      "Aradaki fark önemli. Talep sorununun çözümü pahalıdır: reklam, indirim, yeni kanal, komisyon. Planlama sorununun çözümü ise bedavadır; sadece nereye bakacağınızı bilmeyi gerektirir.",
      "Aşağıdaki beş maddenin hiçbiri araç almayı, personel almayı veya fiyat indirmeyi gerektirmiyor. Hepsi elinizdeki filodan daha fazlasını çıkarmakla ilgili.",
    ],
    body: [
      { type: "h2", id: "kirik-gun", text: "1. Boş gün blokta değil, kırıntıda saklanır" },
      {
        type: "p",
        text: "Hiçbir filo sahibi “aracım on gün boş kaldı” demez, çünkü öyle olmaz. Boş günler takvimde birer ikişer dağılır. Perşembe biten bir kiralama, Cumartesi başlayan bir sonraki. Aradaki Cuma ölür. O tek günü iyi bir fiyata kiralayacak müşteri de pratikte yoktur.",
      },
      {
        type: "p",
        text: "Sahada bu günlere **kırık gün** denir. Tek tek bakıldığında önemsiz görünürler; toplandıklarında filonun en büyük sessiz kaybıdır.",
      },
      { type: "h3", text: "Hata rezervasyonda değil, atamada yapılır" },
      {
        type: "p",
        text: "Rezervasyon geldiğinde ofisteki kişi neredeyse her zaman **en boş aracı** seçer. Sezgisel olarak doğru gelir: “bu araç zaten boş duruyor.” Oysa bu davranış takvimi mümkün olan en fazla parçaya böler. Her yeni rezervasyon, uzun ve satılabilir bir boşluğu ikiye ayırır ve iki yeni kırık gün üretir.",
      },
      {
        type: "quote",
        text: "Yeni rezervasyonu en boş araca değil, en az kırık gün üretecek araca atayın.",
      },
      {
        type: "p",
        text: "Yani aynı sınıftaki araçlar arasında, rezervasyonun öncesindeki ya da sonrasındaki dolu güne yaslanan aracı seçin. Müşteri hangi plakayı aldığını umursamaz; takviminiz fazlasıyla umursar.",
      },
      { type: "h3", text: "Kaybın büyüklüğü" },
      {
        type: "p",
        text: "Kırk araçlık bir filoda araç başına ayda ortalama dört kırık gün, ayda 160 boş gün eder. Bu günlerin yalnızca yarısını kapatmak, filoya dört beş araç eklemekle benzer bir gelir etkisi yaratır — üstelik sıfır sermaye, sıfır sigorta, sıfır amortismanla. Kendi rakamınızı hesaplamak için son üç ayın boş günlerini blok uzunluğuna göre ayırın: kaç tanesi tek gün, kaç tanesi iki gün, kaç tanesi üç gün ve üzeri.",
      },
      { type: "h3", text: "Sahada işe yarayan dört taktik" },
      {
        type: "ul",
        items: [
          "**Tarih kaydırma.** Rezervasyon alırken bir gün öne veya arkaya çekmek mevcut bir boşluğu kapatacaksa, müşteriye küçük bir teşvik sunun. Özellikle turist müşterinin tarihi çoğu zaman esnektir; sadece kimse sormaz.",
          "**Sınıf içi kaydırma.** Rezervasyonu plakaya değil sınıfa bağlayın, plakayı teslimden yirmi dört saat önce kesinleştirin. Bu tek değişiklik, takvimi optimize etme esnekliğini size geri verir.",
          "**Bakımı kırık güne yerleştirin.** Bu maddenin en değerli kısmı budur. Bakım, muayene, lastik ve kasko işlemleri **yeni boş gün yaratmamalı**; zaten var olan kırık günlere yerleşmelidir. Perşembe ile Cumartesi arasındaki ölü Cuma, bakım için bedava bir slottur. Çoğu firma tersini yapar: aracı dolu bir haftadan çeker, servise sokar, iki günlük geliri yakar.",
          "**Uzun rezervasyonu kenara yaslayın.** On günlük bir talep geldiğinde onu ortası boş bir araca değil, boşluğun kenarına oturan araca koyun.",
        ],
      },

      { type: "h2", id: "devir-suresi", text: "2. Devir süresi, filonun görünmeyen bölümüdür" },
      {
        type: "p",
        text: "Araç iki durumda sanılır: kirada veya boşta. Aslında üçüncü ve en pahalı bir durum daha vardır — **hazırlıkta**. İade alınmıştır ama araç henüz tekrar kiralanabilir değildir. Temizlik, yakıt, kontrol, evrak, lokasyon transferi.",
      },
      {
        type: "p",
        text: "Bu süre kimsenin raporunda görünmez, çünkü kimse ölçmez. Oysa filonuzun gerçek kapasitesini belirleyen sayı tam olarak budur. Ölçülecek tek şey basit: **iade saati ile aracın tekrar kiralanabilir hâle geldiği saat arasındaki fark.**",
      },
      {
        type: "callout",
        title: "Hesabı yapalım",
        text: "Ortalama devir süresini dört saatten bir buçuk saate indirmek, 40 araçlık ve araç başına ayda sekiz devir yapan bir filoda 800 saat kazandırır. Bu yaklaşık 33 araç-günü demektir — o ay filonuza bir araç daha eklemişsiniz gibi.",
      },
      { type: "h3", text: "Devir süresini yiyen gerçek sebepler" },
      {
        type: "p",
        text: "Bu soru sorulduğunda herkes “temizlik” der. Oysa temizlik nadiren asıl darboğazdır. Sıralama genellikle şöyledir:",
      },
      {
        type: "ol",
        items: [
          "**Yıkama kuyruğu.** İadelerin tamamı 10.00–12.00 arasında, teslimlerin tamamı 12.00–14.00 arasında toplanır. Darboğaz filo değil, yıkama noktasıdır. Çözüm araç almak değil, sözleşmedeki iade saatlerini kademelendirmektir.",
          "**Tek yönlü şoför hareketi.** Havalimanına araç bırakan personelin eli boş dönmesi. Deneyimli yönetici günü görev listesi olarak değil **döngü** olarak planlar: her gidişin bir dönüş yükü olur, bir teslim bir iade ile eşleştirilir.",
          "**Evrak beklemesi.** Ruhsat, poliçe ve muayene belgesi ofiste tek nüsha duruyorsa araç kâğıt bekler. Her araç için ikinci belge seti ve yedek anahtar, plakalı bir gözde hazır durmalıdır.",
          "**Yakıt politikası.** “Dolu al, dolu bırak” politikası her devire bir istasyon durağı ekler. Ya istasyonu üç dakika mesafeye sabitleyip yakıt kartı kullanın, ya da aynı seviye politikasına geçin.",
          "**Hasarın teslimde fark edilmesi.** En pahalısı budur. İadede gözden kaçan çiziği bir sonraki müşteri teslim sırasında bulur; araç geri döner, gün ölür ve üstüne müşteri kaybedilir. Fotoğraflı iade kaydının asıl amacı hasarı belgelemek değil, **aracı ikinci kez durdurmamaktır**.",
        ],
      },

      { type: "h2", id: "taban-yuk", text: "3. Taban yük kurmadan kullanım oranı sabitlenmez" },
      {
        type: "p",
        text: "Yalnızca günlük ve turistik kiralama yapan bir filo, sezon eğrisinin esiridir. Temmuz’da yüzde doksan beş, Şubat’ta yüzde otuz beş çalışır ve yıllık ortalaması hiçbir zaman iyi olmaz. Deneyimli yönetici filoyu iki katmanlı kurar:",
      },
      {
        type: "ul",
        items: [
          "**Taban yük (filonun dörtte biri ile üçte biri arası):** Aylık ve kurumsal kiralamalar. Günlük fiyatı düşüktür ama boş gün üretmez, tahsilatı düzenlidir ve devir maliyeti neredeyse sıfırdır — ayda bir devir.",
          "**Değişken katman (kalan kısım):** Günlük ve haftalık kiralamalar. Fiyatı yüksektir, sezona bağlıdır, devir maliyeti ağırdır.",
        ],
      },
      { type: "h3", text: "Hangi araç hangi katmana gider" },
      {
        type: "p",
        text: "Bu ayrım genellikle ters yapılır. Doğrusu şudur: **yeni ve düşük kilometreli araçlar günlük tarafa**, **ikinci yılını dolduran ve kilometresi yükselen araçlar aylık tarafa** gider. Turistik segment yeni araç ister ve bunun için yüksek fiyat öder. Kurumsal müşteri ise aracın yaşına çok daha toleranslıdır; onun önceliği aracın çalışıyor ve faturanın düzenli olmasıdır. En yeni filosunu uzun döneme bağlayan firma, sezonda elinde eski araçlarla kalır.",
      },
      { type: "h3", text: "Ölü sezonun az konuşulan kanalları" },
      {
        type: "ul",
        items: [
          "**Sigorta ikame aracı.** Kaza sonrası araçsız kalan sigortalıya verilen araç. Günlük fiyat piyasanın altındadır ama talep sezondan bağımsızdır ve ödeme kurumsaldır.",
          "**Servis ve galeri ikame aracı.** Yetkili servisler ve galeriler, aracı serviste kalan müşterisine araç vermek ister. Süreklilik yaratan, düşük efor gerektiren bir kanaldır.",
          "**Şantiye, proje ve saha ekipleri.** Üç ile on iki ay arası, tek fatura, sıfır devir.",
          "**Uzun dönem bireysel.** Araç satın almak yerine kiralamayı tercih eden bireysel segment; ödeme düzeni kurumsala yakındır.",
        ],
      },
      {
        type: "callout",
        title: "Dikkat: sezon öncesi tuzağı",
        text: "Mart ayında dolan takvim rahatlatıcı gelir, ama taban yükü fazla büyütürseniz Temmuz’da yüksek fiyatla kiralayacak aracınız kalmaz. Uzun dönem sözleşmelerini sezon başlangıcında bitecek şekilde tarihlendirin.",
      },

      { type: "h2", id: "kural-bazli-doluluk", text: "4. Doluluğu fiyatla değil, kuralla yönetin" },
      {
        type: "p",
        text: "Boş gün gören çoğu firmanın refleksi fiyat indirmektir. Bu, kısa vadede takvimi doldurur; uzun vadede fiyat algısını bozar ve aynı müşteriyi bir daha tam fiyata getiremezsiniz. Fiyata dokunmadan önce denenecek dört kural kaldıracı vardır.",
      },
      { type: "h3", text: "Minimum kiralama süresi" },
      {
        type: "p",
        text: "Yoğun dönemde bir günlük rezervasyon almak, o aracı beş günlük bir talebe kapatır. Yüksek sezonda ve uzun hafta sonlarında üç gün minimum uygulaması kullanım oranını düşürür ama araç başına geliri yükseltir. Zaten ölçmeniz gereken de ikincisidir.",
      },
      { type: "h3", text: "Hafta sonu tuzağı" },
      {
        type: "p",
        text: "Cuma alıp Pazar bırakan rezervasyonlar takvimi en çok parçalayan yapıdır; Pazartesi ile Perşembe arası ölür. İki çözüm var: hafta sonu günlük fiyatını ayrıştırmak, ya da Perşembe teslim alana avantaj vererek kiralamayı hafta içine yaymak.",
      },
      { type: "h3", text: "Tek yön ve lokasyon farkı" },
      {
        type: "p",
        text: "Bir noktadan alınıp başka bir noktada bırakılan araç kâğıt üzerinde kârlı görünür. Ama o aracı geri getirmek bir personelin yarım gününü ve çoğu zaman bir kiralama gününü yer. Ya gerçek maliyeti yansıtan bir tek yön ücreti koyun, ya da o güzergâhı kapatın. Ücretsiz tek yön, filonun en sessiz gider kalemidir.",
      },
      { type: "h3", text: "Bilinçli sınıf yükseltme" },
      {
        type: "p",
        text: "Ücretsiz sınıf yükseltme bir kayıp değil, bir takvim aracıdır. Talebin yoğunlaştığı sınıfı korumak için müşteriyi zaten boş duran bir üst sınıfa almak, hem memnuniyet hem takvim kazancıdır.",
      },
      {
        type: "quote",
        text: "Kıt olan sınıfı boşaltmak için bol olan sınıfı hediye edin.",
      },
      {
        type: "p",
        text: "Bunların üstüne basit bir **doluluk eşiği** kuralı ekleyebilirsiniz: bir sınıfın belirli bir tarih aralığındaki doluluğu yüzde sekseni geçtiğinde o aralıkta fiyatı yukarı çekin. Karmaşık bir gelir yönetimi sistemine gerek yok; tek bir eşik bile ciddi fark yaratır.",
      },

      { type: "h2", id: "dogru-metrikler", text: "5. Kullanım oranı yanlış metriktir" },
      {
        type: "p",
        text: "Kullanım oranı tek başına bir gösteriş metriğidir. Yüzde doksan doluluk, fiyatları dibe çekerek elde edildiyse yüzde altmış beşten daha kötüdür. Bakılması gereken sayı **araç başına günlük gelirdir**.",
      },
      {
        type: "table",
        head: ["Metrik", "Nasıl hesaplanır", "Ne söyler"],
        rows: [
          ["Araç başına günlük gelir", "Toplam gelir ÷ (araç sayısı × takvim günü)", "Asıl performans göstergesi"],
          ["Ortalama günlük fiyat", "Kiralama geliri ÷ kiralanan gün", "Fiyat disiplininiz"],
          ["Filo kullanım oranı", "Kiralanan gün ÷ (araç × takvim günü)", "Ham doluluk"],
          ["Operasyonel kullanım oranı", "Kiralanan gün ÷ (kiralanabilir araç × gün)", "Serviste ve hasarda olanı düşer"],
          ["Ortalama kiralama süresi", "Kiralanan gün ÷ rezervasyon sayısı", "Devir yükünüz"],
          ["Devir süresi", "İade → tekrar kiralanabilir", "Görünmeyen kapasiteniz"],
          ["Kırık gün dağılımı", "Boş günlerin 1, 2, 3+ bloklara dağılımı", "Takvim parçalanmanız"],
        ],
      },
      {
        type: "p",
        text: "Bu tablodaki en kritik ikili, **filo kullanım oranı ile operasyonel kullanım oranı arasındaki farktır**. Bu fark, hasar ve bakım yüzünden kaybettiğiniz kapasitedir. Belirgin şekilde açılıyorsa sorununuz talepte değil, atölyededir.",
      },
      { type: "h3", text: "Filo ortalaması yalan söyler" },
      {
        type: "p",
        text: "Her filoda, dokunulmadığı sürece para kaybettiren birkaç araç bulunur. Sebepleri hep aynıdır: yanlış sınıf alınmıştır ve talep görmez; kronik hasar geçmişi vardır ve sürekli atölyededir; yakıt ve bakım maliyeti sınıf ortalamasının üstündedir; ya da ikinci el değeri hızlı düşen bir modeldir.",
      },
      {
        type: "p",
        text: "Bunları görmenin tek yolu **plaka bazında yıllık gelir–gider tablosu** tutmaktır: kiralama geliri eksi bakım, hasar, lastik, sigorta, vergi ve amortisman. Filo ortalamasına bakan yönetici bu araçları hiç fark etmez ve onları yıllarca taşır. Yılda bir kez alt dilimi gözden geçirin; **bir aracı satmak, onu boş taşımaktan ucuzdur**.",
      },
      { type: "h3", text: "Çıkış zamanlaması" },
      {
        type: "p",
        text: "Deneyimli yönetici aracı “eskidiği için” değil, bakım maliyeti eğrisi ile ikinci el değer eğrisinin kesiştiği noktada satar. Pratikte bu, garanti bitmeden ve kilometre bir alt banda düşmeden önceki dönemdir. O noktayı geçen her ay hem bakım maliyetini artırır hem satış fiyatını düşürür; kayıp çift taraflıdır.",
      },

      { type: "h2", id: "sonuc", text: "Toparlarsak" },
      {
        type: "p",
        text: "Beş maddenin ortak noktasına dikkat edin: hiçbiri araç almayı, personel almayı veya fiyat indirmeyi gerektirmiyor. Kırık günleri kapatmak bir atama alışkanlığı; devir süresini kısaltmak bir günlük plan düzeni; taban yük bir filo kurgusu; kural bazlı doluluk bir sözleşme tercihi; doğru metrikler ise bir bakış açısı meselesi.",
      },
      {
        type: "p",
        text: "Hepsinin dayandığı tek şart şu: **takvimi, devir süresini ve plaka bazlı geliri görebiliyor olmak.** Rezervasyonlar WhatsApp’ta, araç listesi bir Excel dosyasında, giderler başka bir dosyada duruyorsa bu üçünün hiçbiri görünmez — ve görünmeyen şey yönetilemez. İlk adım yeni bir araç almak değil, elinizdeki filoyu tek bir ekranda görmek olmalı.",
      },
    ],
  },
];

export const upcomingPosts: UpcomingPost[] = [
  {
    category: "Sektör",
    title: "Araç kiralama sektöründe 2026 dijitalleşme trendleri",
    excerpt: "Kiralama firmalarının teknolojiyle nasıl büyüdüğüne dair güncel gözlemler.",
  },
  {
    category: "Raporlama",
    title: "Doğru metriklerle filo kârlılığınızı nasıl artırırsınız?",
    excerpt: "Doluluk oranı, araç başı gelir ve boşta kalma süresi gibi kritik metrikler.",
  },
];

export function getSortedPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}
