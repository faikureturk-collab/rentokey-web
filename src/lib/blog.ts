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
  updatedAt: string;
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
    slug: "arac-kiralama-sektorunde-2026-dijitallesme-trendleri",
    category: "Sektör",
    title: "Araç kiralama sektöründe 2026 dijitalleşme trendleri",
    excerpt:
      "Kiralama firmalarının teknolojiyle nasıl büyüdüğüne dair güncel gözlemler.",
    description:
      "2026’nın gerçek dijitalleşme gündemi: Motorlu Kara Taşıtlarının Kiralanması Hakkında Yönetmelik, teslim/iade belgesi, depozito ve kilometre kuralları, beş yıllık arşiv ve filo şartlarının operasyona etkisi.",
    publishedAt: "2026-08-20",
    updatedAt: "2026-08-29",
    readingMinutes: 12,
    intro: [
      "Her yıl aynı başlıklarla dijitalleşme yazıları çıkar: yapay zekâ, temassız teslim, dijital anahtar, dinamik fiyatlama. Bu başlıkların çoğu doğrudur ama 20-70 araçlık bir firmanın önümüzdeki on iki ayını belirlemez.",
      "2026’da Türkiye’deki araç kiralama sektörü için asıl dijitalleşme gündemini teknoloji değil **mevzuat** belirledi. 15 Ağustos 2026 tarihli Resmî Gazete’de yayımlanan Motorlu Kara Taşıtlarının Kiralanması Hakkında Yönetmelik, bugüne kadar “iyi olurdu” diye konuşulan kayıt düzenini fiilen zorunlu hâle getiriyor.",
      "Bu yazı, yönetmeliğin operasyonda ne anlama geldiğini ve gerçek teknoloji trendlerinden hangisinin sizin ölçeğinizde şimdi, hangisinin sonra önemli olduğunu ayırıyor.",
    ],
    body: [
      {
        type: "callout",
        title: "Not",
        text: "Aşağıdaki özet bilgilendirme amaçlıdır, hukuki görüş değildir. Karar almadan önce yönetmeliğin Resmî Gazete’de yayımlanan resmî metnini ve kendi mali müşaviriniz ile hukuk danışmanınızın değerlendirmesini esas alın. Ayrıca yönetmelik Türkiye’deki faaliyetleri kapsar; KKTC operasyonları bu düzenlemenin dışındadır — ancak aşağıdaki operasyonel mantık orada da geçerlidir.",
      },

      { type: "h2", id: "asil-trend", text: "1. 2026’nın gerçek trendi: kayıt zorunluluğu" },
      {
        type: "p",
        text: "Yönetmelik 1 Ocak 2027’de yürürlüğe giriyor. Kapsamı, tüketicilere yönelik ve **aynı kiracıya en fazla 29 gün** süreli kiralamalar. Otuz gün ve üzeri kiralamalar ile ticari kiracılara yapılan kiralamalar kapsam dışında.",
      },
      {
        type: "p",
        text: "Geçiş takvimi üç aşamalı:",
      },
      {
        type: "table",
        head: ["Tarih", "Ne oluyor"],
        rows: [
          ["1 Ocak 2027", "Yönetmelik yürürlüğe giriyor"],
          ["1 Temmuz 2027", "Mevcut işletmelerin yetki belgesi başvurusu için son tarih"],
          ["1 Ocak 2028", "Asgari filo, araç yaşı ve kilometre şartları ile platform doğrulama yükümlülüğü başlıyor"],
        ],
      },
      {
        type: "p",
        text: "Yetki belgesi, faaliyet yerindeki ticaret il müdürlüğü tarafından **Motorlu Kara Taşıtı Kiralama Bilgi Sistemi** üzerinden veriliyor; işletme ve şube başına ayrı düzenleniyor ve devredilemiyor. Kiralanacak taşıtların bu sisteme kaydedilmesi de belge şartlarından biri.",
      },
      {
        type: "p",
        text: "Buradaki asıl mesaj şu: **kayıt artık iç işleyişinizin bir tercihi değil, faaliyet izninizin parçası.** Bir sistemin içinde olmak zorunlu hâle geldiğinde, o sistemin dışında tuttuğunuz her veri sizin için risk üretmeye başlar.",
      },

      { type: "h2", id: "teslim-iade", text: "2. Teslim ve iade belgesi olmadan hasar bedeli isteyemiyorsunuz" },
      {
        type: "p",
        text: "Operasyon açısından yönetmeliğin en sert maddesi budur. Yönetmelik teslim belgesi ve iade belgesi düzenlenmesini öngörüyor; **bu belgeler yoksa kiracıdan hasar veya arıza bedeli talep edilemiyor.**",
      },
      {
        type: "p",
        text: "İkinci sert kural: hasarın ve maliyetinin **yetkili ve bağımsız bir ekspertiz raporuyla** belgelenmesi gerekiyor. İşletme personelinin veya işletmeyle bağlantılı kişi ve kuruluşların hazırladığı raporlar geçerli sayılmıyor. Yıllardır kendi ustasının fiyat verdiği hasar süreçlerini yürüten firmalar için bu, sürecin baştan kurulması demek.",
      },
      {
        type: "p",
        text: "Üçüncüsü: arızanın kiracıdan kaynaklandığını **ispat yükü işletmede.** İspatlanamazsa arızanın kiracıdan kaynaklanmadığı kabul ediliyor. Ayrıca olağan kullanımdan doğan aşınma ile teslim sırasında belirlenememiş çizik ve göçükler için depozitodan kesinti yapılamıyor.",
      },
      {
        type: "quote",
        text: "Belgesiz hasar, artık sadece tahsil edilemeyen hasar değil; talep edilemeyen hasar.",
      },
      {
        type: "p",
        text: "Bu üç kural bir araya geldiğinde, teslim ve iade anında tutulan kaydın kalitesi doğrudan gelir kalemine dönüşüyor. Kaydın nasıl tutulması gerektiğini ayrıca ele almıştık: [Araç teslim/iade sürecini dijitalleştirmenin faydaları](/blog/arac-teslim-iade-surecini-dijitallestirmek).",
      },

      { type: "h2", id: "fiyat-kurgusu", text: "3. Depozito, iptal ve kilometre: fiyat kurgunuzu yeniden hesaplayın" },
      {
        type: "p",
        text: "Yönetmelik yalnızca kayıt düzenini değil, ticari kurgunun birkaç parametresini de sınırlıyor. Bunlar tabloya dökülünce ne kadarının yeniden hesap gerektirdiği daha net görünüyor:",
      },
      {
        type: "table",
        head: ["Konu", "Kural"],
        rows: [
          ["Depozito — 6 gün ve altı", "En fazla 3 günlük kira bedeli"],
          ["Depozito — 7 ila 29 gün", "En fazla 7 günlük kira bedeli"],
          ["Depozito aracı", "Çek, senet, teminat mektubu ve kefaletname alınamaz"],
          ["Depozito iadesi", "Kural olarak 7 gün içinde"],
          ["Kilometre — saatlik kiralama", "En az 20 km"],
          ["Kilometre — 1 ila 6 gün", "Günlük en az 150 km"],
          ["Kilometre — 7 ila 29 gün", "Günlük en az 100 km"],
          ["İptal — son 24 saat dışında", "Bedel alınamaz"],
          ["İptal — son 24 saat içinde", "En fazla 1 günlük kira bedeli"],
          ["Geç iade", "1 saate kadar gecikmede ücret talep edilemez"],
        ],
      },
      {
        type: "p",
        text: "Bu tablonun operasyonel karşılığı üç başlıkta toplanıyor. Birincisi, **düşük günlük fiyatla yüksek depozito** dengesine oturmuş firmalar için depozito artık kira bedeline endeksli; fiyat düşürdüğünüzde alabileceğiniz depozito da düşüyor. İkincisi, dar kilometre paketleri üzerine kurulu fiyatlandırmalar taban değerlerin üzerine çıkmak zorunda. Üçüncüsü, iptal ve geç iade kalemleri artık serbest bir gelir kalemi değil.",
      },
      {
        type: "p",
        text: "Bunların hepsi elle takip edilebilecek şeyler değil. Depozitonun kira bedeline göre hesaplanması, yedi gün içinde iadesi ve kesinti yapılabilecek kalemlerin sözleşmeye bağlı olması — bu üçü birlikte, tahsilat ve iade takibini bir sisteme bağlamayı fiilen zorunlu kılıyor.",
      },

      { type: "h2", id: "sozlesme-arsiv", text: "4. Sözleşme teslimden önce, arşiv beş yıl" },
      {
        type: "p",
        text: "Yönetmelik, kira sözleşmesinin **yazılı veya elektronik ortamda** yapılmasını ve bir nüshasının **taşıt tesliminden önce** kiracıya verilmesini öngörüyor. Sözleşmede bulunması gereken bilgiler oldukça ayrıntılı: taraflar ve ek sürücü, taşıtın marka, model, kilometre, enerji türü ve vites bilgisi, depozito tutarı, sigorta ve güvence kapsamı, kilometre aşımı, geç teslim, otoyol ve köprü geçişleri, enerji gideri, hasar sorumluluğu ve her hizmetin ayrı bedeli.",
      },
      {
        type: "p",
        text: "Bunu havalimanı otoparkında, müşteri arabaya binmeden önce kâğıtla yapmayı deneyin. Pratikte tek uygulanabilir yol elektronik sözleşme.",
      },
      {
        type: "p",
        text: "Buna bir de **beş yıllık saklama yükümlülüğü** ekleniyor: sözleşmeler, belgeler ve formlar fiziki veya elektronik ortamda beş yıl saklanacak. Yılda birkaç bin kiralama yapan bir firma için bu, fiziki klasörle sürdürülebilir bir düzen değil. Beş yıl sonra istenen tek bir sözleşmeyi bulabilmek, arşivin aranabilir olmasını gerektirir.",
      },

      { type: "h2", id: "filo-kompozisyonu", text: "5. Filo kompozisyonu artık bir uyum konusu" },
      {
        type: "p",
        text: "Şimdiye kadar filoyu talep ve bütçe belirliyordu. 1 Ocak 2028’den itibaren buna uyum şartları ekleniyor:",
      },
      {
        type: "table",
        head: ["Şart", "Değer"],
        rows: [
          ["Asgari filo — büyükşehir ilçesi (30.000+ nüfus)", "10 taşıt, en az 5’i işletme adına tescilli"],
          ["Asgari filo — diğer yerler", "5 taşıt, en az 2’si işletme adına tescilli"],
          ["Hibrit/elektrikli şartı (büyükşehir ilçesi)", "En az 2 taşıt, en az biri Türkiye üretimi"],
          ["Azami araç yaşı", "Model yılına göre 6 yaş"],
          ["Azami kilometre — elektrikli", "300.000 km"],
          ["Azami kilometre — diğer", "180.000 km"],
        ],
      },
      {
        type: "p",
        text: "Buradan iki pratik sonuç çıkıyor. Birincisi, **araç çıkış planlaması artık isteğe bağlı değil.** Altı yaşını dolduracak ya da kilometre sınırına yaklaşacak araçları önceden görmek gerekiyor; bunu fark ettiğiniz gün satmak, zamanında satmaktan her zaman daha pahalıdır. İkincisi, hibrit veya elektrikli araç kararı artık bir “deneyelim” konusu olmaktan çıkıp takvime bağlanmış bir gereklilik hâline geliyor.",
      },
      {
        type: "p",
        text: "Bir ayrıntı daha: yönetmelik 30 gün ve üzeri kiralamalar ile ticari kiracıları kapsamıyor. Bu, uzun dönem ve kurumsal işin stratejik değerini artırıyor — hem sezon dışı doluluk hem de uyum yükü açısından.",
      },

      { type: "h2", id: "kanallar", text: "6. Kanal tarafı: platformlar yetki belgesi soracak" },
      {
        type: "p",
        text: "İlan ve aracı platformlar, üyelik veya kayıt öncesinde işletmenin yetki belgesini Bilgi Sistemi üzerinden kontrol etmekle yükümlü olacak; belge yoksa üyelik ve ilan reddedilecek. İlanlarda yetki belgesi numarası, işletme kimliği ve taşıtın marka, model yılı, enerji türü, segment ve kilometre bilgisi gösterilecek. Havalimanı veya terminalde merkezi ya da şubesi bulunmayan işletmelerin bu durumu açıkça belirtmesi gerekecek.",
      },
      {
        type: "p",
        text: "Platform üzerinden yapılan kiralamalarda, kiracının itirazı yoksa ödemenin teslimden itibaren en geç beş iş günü içinde işletmeye aktarılması da düzenlenmiş durumda.",
      },
      {
        type: "p",
        text: "Bunun anlamı şu: pazaryeri ve ilan kanallarından gelen iş artık belge durumunuza bağlı. Bu kanalları kullanan bir firma için yetki belgesi süreci bir evrak işi değil, doğrudan bir satış kanalı meselesi.",
      },

      { type: "h2", id: "gercek-trendler", text: "7. Peki teknoloji trendleri? Hangisi şimdi, hangisi sonra" },
      {
        type: "p",
        text: "Mevzuat gündemi bu kadar yer kaplarken, teknoloji başlıklarını bir öncelik filtresinden geçirmek gerekiyor. 20-70 araçlık bir firma için makul sıralama şudur:",
      },
      { type: "h3", text: "Şimdi: getirisi bu yıl görünenler" },
      {
        type: "ul",
        items: [
          "**Elektronik sözleşme ve dijital teslim/iade kaydı.** Hem uyum hem tahsilat tarafında doğrudan karşılığı var. Listenin başında olmasının sebebi moda olması değil, hasar talebinin buna bağlanmış olması.",
          "**Aranabilir arşiv.** Beş yıllık saklama yükümlülüğü, kaydı tutmakla bulmayı ayrı sorunlar hâline getiriyor.",
          "**Ödeme ve depozito otomasyonu.** Kart üzerinden ön provizyon, kesinti kalemlerinin sözleşmeye bağlanması ve yedi günlük iade takibi.",
          "**Araç bazlı raporlama.** Yaş ve kilometre sınırları geldiğinde, hangi aracın ne zaman çıkacağını önceden görmek gerekiyor.",
        ],
      },
      { type: "h3", text: "Sonra: doğru ama acele değil" },
      {
        type: "ul",
        items: [
          "**Dijital anahtar ve tam temassız teslim.** Filo genelinde donanım yatırımı ve marka/model uyumu gerektirir; ölçek büyümeden geri dönüşü zayıftır.",
          "**Dinamik fiyatlama ve yapay zekâ destekli öneriler.** Anlamlı olması için önce temiz ve tutarlı bir geçmiş rezervasyon verisi gerekir. Verisi dağınık bir firmada bu araçlar yanlış öneri üretir.",
          "**Telematik ve sürüş davranışı analizi.** Değerli ama önceliği, temel kaydın oturmasından sonradır.",
        ],
      },
      {
        type: "p",
        text: "Sıralamanın mantığı basit: **önce kaydı düzelt, sonra kayıttan akıl üret.** Tersini deneyen firmalar pahalı araçlar alıp bunları eksik veriyle besliyor ve sonuçlara güvenemiyor.",
      },

      { type: "h2", id: "hazirlik", text: "8. 2027’ye hazırlık: yapılacaklar listesi" },
      {
        type: "ol",
        items: [
          "Yetki belgesi başvuru sürecini şimdiden planlayın; son tarih 1 Temmuz 2027 ama başvuru öncesinde iş yeri, vergi kaydı ve meslek odası şartlarının tamamlanması gerekiyor.",
          "Kiralama sorumlusu için aranan **Motorlu Kara Taşıtı Kiralama Danışmanı Seviye 4 mesleki yeterlilik belgesi** sürecini başlatın; belge alma süresi kısa değil.",
          "Sözleşme metninizi yönetmelikte sayılan zorunlu içeriklere göre yeniden yazdırın ve elektronik olarak, teslimden önce iletilebilir hâle getirin.",
          "Teslim ve iade belgesi akışınızı kurun; hasar talebinin dayanağı bu iki belge.",
          "Bağımsız ekspertiz için önceden bir çalışma düzeni oluşturun; hasar çıktığında kime gideceğinizi o gün aramayın.",
          "Depozito, kilometre ve iptal politikalarınızı tablo üzerinden yeniden hesaplayın.",
          "Filo yaş ve kilometre projeksiyonunu çıkarın: 1 Ocak 2028’de hangi araçlar sınırın dışında kalacak?",
          "Arşiv düzenini beş yıllık saklama ve aranabilirlik ölçütüne göre kurun.",
        ],
      },

      { type: "h2", id: "sonuc", text: "Toparlarsak" },
      {
        type: "p",
        text: "2026’nın dijitalleşme başlığı, sektöre dışarıdan gelen bir teknoloji dalgası değil; içeriden gelen bir kayıt zorunluluğu. Yapay zekâ ve temassız teslim gündemde kalmaya devam edecek, ama önümüzdeki on iki ayda bir firmanın işini değiştirecek olan şey sözleşmesinin, teslim belgesinin, depozito hesabının ve arşivinin nerede durduğu.",
      },
      {
        type: "p",
        text: "İyi haber şu: bu düzeni kurmak zaten operasyonel olarak kârlı. Yönetmelik yalnızca, ertelenen bir işi takvime bağladı.",
      },
    ],
  },
  {
    slug: "arac-teslim-iade-surecini-dijitallestirmek",
    category: "Operasyon",
    title: "Araç teslim/iade sürecini dijitalleştirmenin faydaları",
    excerpt:
      "Kağıt tutanaklardan dijital teslimat kayıtlarına geçişin operasyona sağladığı avantajlar.",
    description:
      "Kağıt teslim tutanağından fotoğraflı dijital teslim/iade kaydına geçmenin operasyona etkisi: atfedilemeyen hasar, devir süresi, personel bağımlılığı ve uyuşmazlık yönetimi.",
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-29",
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
    updatedAt: "2026-09-02",
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
      {
        type: "p",
        text: "Bu kararı takvim üzerinde nasıl kuracağınızı; çakışma, hazırlık tamponu ve büyük filo görünümüyle birlikte [araç kiralama firmaları için rezervasyon takvimi rehberinde](/blog/arac-kiralama-rezervasyon-takvimi-nasil-yonetilir) ele aldık.",
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
  {
    slug: "dogru-metriklerle-filo-karliligini-artirma",
    category: "Raporlama",
    title: "Doğru metriklerle filo kârlılığınızı nasıl artırırsınız?",
    excerpt: "Doluluk oranı, araç başı gelir ve boşta kalma süresi gibi kritik metrikler.",
    description:
      "Doluluk oranı yükselirken kârlılık neden yerinde sayar? Doluluk oranı, araç başı gelir ve boşta kalma süresini birlikte okuyarak fiyatlandırma, filo kompozisyonu ve büyüme kararlarını doğru vermenin yolu.",
    publishedAt: "2026-08-31",
    updatedAt: "2026-08-31",
    readingMinutes: 9,
    intro: [
      "Ay sonunda doluluk oranı raporuna bakıp rahatlıyorsunuz: geçen aya göre birkaç puan yükselmiş. Ama üç ay sonra kâr-zarar tablosuna baktığınızda hikâye aynı değil — ciro biraz artmış, banka hesabınız neredeyse yerinde saymış. Bu iki tablo neden birbirini doğrulamıyor?",
      "**Doluluk oranı size ne kadar çalıştığınızı söyler; kârlı çalışıp çalışmadığınızı söylemez.** Bunu görmek tek bir sayıya bakmakla değil, doluluk oranı, araç başı gelir ve boşta kalma süresinin birlikte anlattığı hikâyeyi okumakla mümkündür.",
      "Bu yazı, filonun boş günlerini azaltmanın operasyonel yollarını değil — onu ayrı bir yazıda ele aldık — aynı üç metriği fiyatlandırma, filo kompozisyonu ve büyüme kararlarına nasıl çevireceğinizi anlatıyor.",
    ],
    body: [
      { type: "h2", id: "doluluk-tuzagi", text: "1. Doluluk oranı yükselirken kâr neden yerinde sayar" },
      {
        type: "p",
        text: "Doluluk oranını yükseltmenin en hızlı yolu bellidir: fiyatı kırmak, minimum kiralama süresini kaldırmak, uzun dönem sözleşmeye ağırlık vermek. Bu üçü de takvimi doldurur. Ama hiçbiri, o dolan takvimin ne kadar kazandırdığını söylemez.",
      },
      {
        type: "quote",
        text: "Yüksek doluluk, düşük fiyattan satın alınmışsa bir başarı değil, ertelenmiş bir zarardır.",
      },
      { type: "h3", text: "Basit bir kontrol: doluluk artışının kaynağı ne?" },
      {
        type: "p",
        text: "İki farklı senaryo aynı doluluk grafiğini üretebilir. Birincisi: aynı fiyattan, daha fazla araç kiralanmış — gerçek bir talep artışı. İkincisi: fiyat kırılarak veya ortalama kiralama süresi yapay olarak uzatılarak doluluk şişirilmiş — görünüşte büyüme, gerçekte marj kaybı. Bu ikisini birbirinden ayıran tek şey, aynı dönemin araç başı gelirine bakmaktır.",
      },
      {
        type: "callout",
        title: "Hızlı test",
        text: "Bu ayın doluluk oranı geçen aya göre yükseldiyse, aynı dönemin araç başı gelirine bakın. İkisi birlikte yükselmiyorsa doluluk artışınız büyük ihtimalle fiyattan geliyor — talepten değil.",
      },

      { type: "h2", id: "arac-basi-geliri-okumak", text: "2. Araç başı geliri okumanın doğru yolu" },
      {
        type: "p",
        text: "Araç başı gelir basit bir bölme işlemidir: belirli bir dönemdeki toplam kiralama gelirinin, filodaki araç sayısına bölünmesi. Ama filo geneli tek bir ortalama, tıpkı doluluk oranında olduğu gibi, kararı yanlış yöne çekebilir.",
      },
      { type: "h3", text: "Filo ortalaması, kararı yanlış yöne çeker" },
      {
        type: "p",
        text: "Otuz ekonomi sınıfı ve on premium araçtan oluşan kırk araçlık bir filo düşünün. Filo ortalaması makul görünse bile, bu ortalama iki çok farklı gerçekliği gizliyor olabilir: ekonomi sınıfı yüksek talep ve düzenli getiriyle çalışırken, premium sınıf düşük talep ve yüksek sabit giderle (finansman, sigorta, bakım) filonun kârını aşağı çekiyor olabilir. Filo ortalamasına bakan yönetici bu tabloyu görmez; segment bazında ayrıştırmayan hiçbir rapor bunu göstermez.",
      },
      {
        type: "table",
        head: ["Segment", "Araç sayısı", "Araç başı aylık gelir (örnek)", "Yorum"],
        rows: [
          ["Ekonomi", "30", "₺28.000", "Talep yüksek, sabit gider düşük"],
          ["Premium", "10", "₺19.000", "Talep düşük, sabit gider yüksek"],
          ["Filo ortalaması", "40", "₺25.750", "İkisini de gizliyor"],
        ],
      },
      {
        type: "p",
        text: "Buradaki rakamlar mekanizmayı göstermek için kurulmuş bir örnektir; kendi filonuzdaki gerçek dağılımı görmek için segment bazlı hesaplama gerekir. Filoya yeni araç eklemeden önce sorulması gereken soru şudur: **eklenecek araç, o segmentin sabit giderini araç başı gelirle rahatça karşılıyor mu, yoksa filo ortalamasının arkasına gizlenerek mi büyüyor?**",
      },

      {
        type: "h2",
        id: "bosta-kalma-suresini-paraya-cevirmek",
        text: "3. Boşta kalma süresini doğrudan paraya çevirin",
      },
      {
        type: "p",
        text: "Boşta kalma süresi bir operasyon göstergesi olarak raporlanır, ama aslında doğrudan bir gelir kaybı kalemidir — gün cinsinden, dolayısıyla para cinsinden ölçülebilir.",
      },
      {
        type: "callout",
        title: "Hesabı yapalım",
        text: "Bir aracın ortalama günlük getirisi 900 TL ise ve o araç ayda üç gün fazladan boşta kalıyorsa, tek bir araç için aylık kayıp 2.700 TL'dir. Yirmi araçlık bir filoda aynı ortalama geçerliyse, bu 54.000 TL'lik aylık, görünmeyen bir gelir kaybı demektir.",
      },
      {
        type: "p",
        text: "Bu boşluğun nereden geldiğini — talep eksikliğinden mi, yoksa atama ve devir süreçlerinden mi — ayırt etmek ayrı bir çalışmadır; [Filo yönetiminde verimliliği artırmanın 5 yolu](/blog/filo-yonetiminde-verimliligi-artirmanin-5-yolu) yazımızda kırık gün ve devir süresi mekanizmalarını bu yüzden ayrıca ele aldık. Buradaki asıl mesele farklı: bu süreyi bir rapor satırı olarak değil, aylık bir maliyet kalemi olarak görmek.",
      },
      { type: "h3", text: "Kim, ne sıklıkla bakmalı" },
      {
        type: "p",
        text: "Boşta kalma süresi ay sonunda değil, haftalık gözden geçirilmelidir. Bir sorunun fark edilmesi ile düzeltilmesi arasındaki gecikme, doğrudan kaybedilen araç-gün sayısına eklenir. Küçük filolarda bu takibi filo sorumlusu, büyüyen filolarda şube müdürleri üstlenmelidir — tek bir kişinin ay sonunda göz atacağı bir rapor değil, düzenli sahiplenilen bir alışkanlık olmalıdır.",
      },

      { type: "h2", id: "uc-metrigi-birlikte-okumak", text: "4. Üç metriği bir arada okumak: basit bir karar matrisi" },
      {
        type: "p",
        text: "Bu üç metrik tek başına değil, birlikte okunduğunda karar üretir. Aşağıdaki kombinasyonlar kesin bir formül değil, ilk teşhis için bir başlangıç noktasıdır:",
      },
      {
        type: "table",
        head: ["Doluluk oranı", "Araç başı gelir", "Boşta kalma süresi", "Muhtemel anlamı", "Hangi karara işaret eder"],
        rows: [
          ["Yüksek", "Düşük", "Düşük", "Doluluk fiyattan satın alınmış", "Fiyat ve segment kararını gözden geçir"],
          ["Düşük", "Yüksek", "Düşük", "Az ama kârlı çalışıyor, kapasite fazlası var", "Talebi büyütmeyi veya filoyu küçültmeyi değerlendir"],
          ["Düşük", "Düşük", "Yüksek", "Hem talep hem operasyon sorunu bir arada", "Önce operasyonel nedenleri ayıkla, sonra fiyata dokun"],
          ["Yüksek", "Yüksek", "Düşük", "Sağlıklı ve tekrarlanabilir performans", "Büyüme veya yeni araç kararı için güvenli sinyal"],
        ],
      },
      {
        type: "p",
        text: "Bu matrisin değeri, hangi kutuda olduğunuzu bulduktan sonra doğru soruyu sormanızdır. Örneğin \"yüksek doluluk, düşük araç başı gelir\" kutusundaysanız, cevap daha fazla araç kiralamak değil, mevcut araçları daha iyi fiyattan kiralamaktır — tam tersi bir refleksle çoğu firma bu noktada filoyu büyütmeyi dener ve sorunu büyütür.",
      },

      { type: "h2", id: "sonuc", text: "Bunu bir alışkanlığa çevirmek" },
      {
        type: "p",
        text: "Doğru metrikleri bilmek yetmez; onlara ne sıklıkla ve hangi düzeyde (filo geneli mi, segment bazlı mı) bakacağınızı da bir alışkanlık hâline getirmeniz gerekir. Tek bir ayın rakamına aşırı tepki vermeyin — sezonsallık, kampanya dönemleri ve tek seferlik olaylar kısa vadede metrikleri oynatabilir. Asıl anlam, üç ayı aşan bir eğilimde ortaya çıkar.",
      },
      {
        type: "p",
        text: "Bu üç metriğin ortak noktası şudur: hiçbiri tek başına, filonun geri kalanından kopuk okunduğunda anlam taşımaz. Doluluk oranı araç başı gelirle, araç başı gelir boşta kalma süresiyle birlikte değerlendirilmeli — üçü de rezervasyon, teslim/iade ve finans verisinin aynı ekranda görülebilmesini gerektirir. Excel'de ayrı ayrı tutulan bu üç veri seti, hiçbir zaman aynı anda okunmaz; ve okunmayan metrik, karara dönüşmez.",
      },
    ],
  },
  {
    slug: "arac-kiralama-rezervasyon-takvimi-nasil-yonetilir",
    category: "Rezervasyon Yönetimi",
    title: "Araç kiralama firmaları için rezervasyon takvimi nasıl yönetilir?",
    excerpt:
      "Çakışmaları, kırık günleri, hazırlık süresini ve araç atama hatalarını azaltmak için uygulamalı planlama rehberi.",
    description:
      "Araç kiralama rezervasyon takvimi nasıl yönetilir? Çakışma, hazırlık süresi, araç atama, aylık kiralama ve 70 araçlık filo planlaması için uygulamalı rehber.",
    publishedAt: "2026-09-02",
    updatedAt: "2026-09-02",
    readingMinutes: 12,
    intro: [
      "Bir araç kiralama firmasında takvim yalnızca hangi aracın hangi tarihte kirada olduğunu gösteriyorsa işin yarısını yapıyor demektir. Çünkü günlük operasyonu bozan sorunların çoğu, rezervasyon kaydının kendisinde değil; **iki rezervasyonun arasında, araç atama kararında ve teslim–iade hazırlığında** ortaya çıkar.",
      "Bir tabloda iki rezervasyon üst üste gelmeyebilir ama araç yine de ikinci müşteriye yetişmeyebilir. İlk müşteri aracı havalimanında 10.00'da bırakır, sonraki müşteri merkez şubeden 10.35'te teslim almak ister. Kâğıt üzerinde 35 dakika boşluk vardır; sahada ise iade kontrolü, temizlik ve transfer için zaman yoktur.",
      "Bu rehber araç kiralayacak müşteriye değil, filoyu yöneten ekibe yöneliktir. Amaç takvimi doldurmak değil; **rezervasyon, araç, lokasyon ve hazırlık süresini birlikte yöneterek uygulanabilir bir operasyon planı kurmaktır.**",
    ],
    body: [
      {
        type: "h2",
        id: "takvim-kapasite-haritasi",
        text: "1. Rezervasyon takvimini randevu listesi değil, kapasite haritası olarak okuyun",
      },
      {
        type: "p",
        text: "Randevu listesi size müşterinin adını ve teslim saatini söyler. Kapasite haritası ise aynı anda dört soruya cevap verir: **hangi araç kirada, hangisi gerçekten müsait, hangisi hazırlıkta ve hangi rezervasyon henüz bir araca atanmadı?** Bu ayrım yapılmadığında boş görünen her araç kiralanabilir sanılır.",
      },
      {
        type: "table",
        head: ["Takvim durumu", "Ne anlatır", "Beklenen aksiyon"],
        rows: [
          ["Kirada", "Araç aktif bir rezervasyonda", "Teslim/iade saatini takip et"],
          ["Müsait", "Bilinen engeli ve aktif rezervasyonu yok", "Yeni talep için değerlendir"],
          ["Hazırlıkta", "Temizlik, kontrol veya transfer bekliyor", "Sorumlu ve hazır olma saati ata"],
          ["Serviste/bakımda", "Operasyon dışı", "Tahmini dönüş tarihini güncelle"],
          ["Araç atanmamış", "Talep var, kesin plaka henüz yok", "Uygun sınıftan araç planla"],
          ["Çakışma/risk", "Aynı zaman, yetersiz tampon veya lokasyon sorunu", "Teslimden önce çöz"],
        ],
      },
      {
        type: "p",
        text: "Renk kullanmak bu durumları ilk bakışta ayırmayı kolaylaştırır; fakat renk tek başına yeterli değildir. Durum adı, saat, lokasyon ve gereken aksiyon metin olarak da görünmelidir. Böylece yoğun ekranda hata riski azalır ve renk görme farklılıkları olan kullanıcılar da bilgiyi okuyabilir.",
      },

      {
        type: "h2",
        id: "once-sinif-sonra-arac",
        text: "2. Rezervasyonu önce sınıfa, doğru zamanda plakaya bağlayın",
      },
      {
        type: "p",
        text: "Müşteri çoğu zaman belirli bir plakayı değil, ekonomi otomatik veya SUV gibi bir araç sınıfını satın alır. Buna rağmen rezervasyon oluşturulduğu anda kesin araç seçmek, takvimi gereksiz yere kilitler. Daha sonraki bir rezervasyon aynı araçta daha iyi bir boşluk kapatacak olsa bile plan değiştirilemez hâle gelir.",
      },
      {
        type: "p",
        text: "Daha esnek yöntem iki aşamalıdır: talebi önce araç sınıfına kaydedin, kesin plakayı teslim yaklaşınca atayın. Sistem uygun araç önerirken yalnız boşluğu değil; önceki rezervasyonun bitişini, sonraki rezervasyonun başlangıcını, lokasyonu, bakım durumunu ve oluşacak kırık günleri birlikte değerlendirmelidir.",
      },
      {
        type: "callout",
        title: "Örnek atama kararı",
        text: "Beş günlük bir ekonomi sınıfı rezervasyon için iki araç müsait olsun. Birinci araç on iki gün kesintisiz boş, ikinci araç ise rezervasyondan bir gün önce dönüyor. Yeni işi birinci araca vermek iki uzun boşluğu parçalar; ikinci araca yaslamak çoğu durumda daha az kırık gün üretir. Öneri otomatik olabilir, son karar yine kullanıcıda kalmalıdır.",
      },
      {
        type: "p",
        text: "Kırık günlerin gelir üzerindeki etkisini ve sınıf içi atama yöntemlerini [filo yönetiminde verimliliği artırmanın 5 yolu](/blog/filo-yonetiminde-verimliligi-artirmanin-5-yolu) yazısında daha ayrıntılı ele aldık.",
      },

      {
        type: "h2",
        id: "cakisma-ve-operasyon-riski",
        text: "3. Takvim çakışması ile operasyon riskini birbirinden ayırın",
      },
      {
        type: "p",
        text: "Takvim çakışması nettir: aynı araç, kesişen iki zaman aralığında iki müşteriye atanmıştır. Operasyon riski ise daha sinsidir; saatler teknik olarak kesişmez ama araç ikinci işe yetişemez. Bu iki durum aynı uyarı seviyesinde gösterilirse ekip bir süre sonra bütün uyarıları görmezden gelmeye başlar.",
      },
      {
        type: "table",
        head: ["Durum", "Örnek", "Nasıl davranmalı"],
        rows: [
          ["Kesin çakışma", "İki rezervasyon aynı araçta 14.00–16.00 arasında örtüşüyor", "Kaydetmeden önce açık onay veya yeniden atama iste"],
          ["Hazırlık riski", "İade ile yeni teslim arasında yalnız 35 dakika var", "Uyar, alternatif araç ve saat öner"],
          ["Lokasyon riski", "Araç Girne'de iade, Lefkoşa'da teslim edilecek", "Transfer süresini ve görevliyi planla"],
          ["Belirsiz atama", "Rezervasyon sınıfa kayıtlı ama plaka yok", "Teslime kalan süreye göre önceliklendir"],
        ],
      },
      {
        type: "p",
        text: "Uyarının amacı kullanıcıyı durdurmak değil, kararın sonucunu görünür kılmaktır. Belge veya araç kontrolü gibi bilgilendirmeler operasyonu gereksiz yere kilitlememeli; kullanıcı gerekçeyi görüp yetkisi dahilinde devam edebilmelidir. Kesin zaman çakışmalarında ise yanlışlıkla çift teslimi önleyecek daha güçlü bir onay adımı kullanılmalıdır.",
      },

      {
        type: "h2",
        id: "hazirlik-transfer-tamponu",
        text: "4. İki rezervasyon arasına gerçekçi hazırlık ve transfer süresi koyun",
      },
      {
        type: "p",
        text: "Bir aracın iade edildiği an ile yeniden kiralanabilir olduğu an aynı değildir. İade kontrolü, fotoğraf, yakıt, kilometre, temizlik, hasar değerlendirmesi ve gerekiyorsa şubeler arası transfer tamamlanmadan araç müsait sayılmamalıdır.",
      },
      {
        type: "p",
        text: "Sabit bir tampon süresi başlangıç için işe yarar, fakat her işlem aynı değildir. Merkez şubede dönen temiz bir araçla havalimanından alınıp başka şubeye götürülecek aracın hazırlık süresi eşit olamaz. En sağlıklı yaklaşım, sınıf ve lokasyon bazında asgari süre tanımlamak ve plan bu sürenin altına düştüğünde uyarı üretmektir.",
      },
      {
        type: "callout",
        title: "35 dakikalık boşluk neden boşluk değildir?",
        text: "Araç 10.00'da Girne Limanı'nda iade edilecek, sonraki teslim 10.35'te merkez şubede yapılacaksa takvimde 35 dakika boş görünür. On dakikalık iade kontrolü, yirmi dakikalık transfer ve on beş dakikalık temizlik varsayımında en iyi ihtimalle on dakika gecikme oluşur. Çözüm müşteriye gecikince haber vermek değil; aracı önceden değiştirmek, teslim saatini düzenlemek veya hazırlık görevini planlamaktır.",
      },
      {
        type: "p",
        text: "Teslim ve iade kayıtlarının neden operasyonun temel parçası olduğunu [araç teslim/iade sürecini dijitalleştirmek](/blog/arac-teslim-iade-surecini-dijitallestirmek) yazısında bulabilirsiniz.",
      },

      {
        type: "h2",
        id: "dogru-zaman-olcegi",
        text: "5. Günlük, 14 günlük ve aylık görünümü farklı kararlar için kullanın",
      },
      {
        type: "p",
        text: "Tek bir zaman ölçeği bütün soruları cevaplamaz. Çok geniş görünümde saatlik riskler kaybolur; çok dar görünümde ise aylık kiralamalar ve ileride oluşacak kapasite açığı fark edilmez. Bu nedenle görünüm seçimi yapılan işe göre değişmelidir.",
      },
      {
        type: "ul",
        items: [
          "**7 günlük görünüm:** Yaklaşan teslimler, iadeler, kısa boşluklar ve saha görevleri için uygundur.",
          "**14 günlük görünüm:** Günlük operasyonla kapasite planı arasındaki en dengeli çalışma alanıdır; aynı sınıftaki araçları karşılaştırmayı kolaylaştırır.",
          "**Aylık görünüm:** Uzun kiralamaları, sezon yoğunluğunu, bakım pencerelerini ve sınıf bazlı kapasite ihtiyacını gösterir.",
        ],
      },
      {
        type: "p",
        text: "Aylık kiralamalar dar görünümde bile kaybolmamalıdır. Uzun süreli bir rezervasyon, takvimde sürekliliği olan ayrı bir görünümle işaretlenirse kullanıcı hem aracın uzun dönem bağlı olduğunu hem de günlük kiralamaya ne zaman döneceğini ilk bakışta anlayabilir.",
      },

      {
        type: "h2",
        id: "yetmis-aracli-filo",
        text: "6. Yetmiş araçlık filoda bütün satırları aynı anda göstermeyin",
      },
      {
        type: "p",
        text: "On iki araçlık takvimde tüm filoyu tek ekranda görmek mümkündür. Yetmiş araçta aynı yaklaşım bilgi sağlamaz; yalnızca uzun bir kaydırma alanı üretir. Büyük filoda amaç bütün araçları sürekli göstermek değil, ihtiyaç duyulan kümeyi birkaç saniyede bulmaktır.",
      },
      {
        type: "ol",
        items: [
          "Araçları ekonomi, orta sınıf, SUV veya ticari gibi **sınıflara göre gruplayın**; her grubun araç sayısını ve doluluk oranını başlıkta gösterin.",
          "Plaka veya model aramasını, sınıf, durum ve lokasyon filtreleriyle **tek satırda** tutun.",
          "Kullanılmayan grupları daraltın; teslimi yaklaşan, araç atanmamış veya riskli satırları üstte gösterecek hazır görünümler sunun.",
          "Araç satırını gereksiz yere büyütmeyin. Plaka, model ve kritik durum bir bakışta okunmalı; ayrıntılar seçildiğinde açılmalıdır.",
          "Filtre temizleme ve grup daraltma işlemlerini görünür tutun; kullanıcı hangi filtre nedeniyle bazı araçları göremediğini anlamalıdır.",
        ],
      },
      {
        type: "p",
        text: "Bu düzen yalnız ekran alanını korumaz. Aynı sınıftaki araçların yan yana görülmesini sağladığı için araç atama kararını da iyileştirir. Yetmiş satırlık bir listeyi taramak yerine ilgili on araçlık grupta doğru boşluğu ararsınız.",
      },

      {
        type: "h2",
        id: "takvimden-hizli-islem",
        text: "7. Takvimi yalnız görüntüleme alanı değil, işlem başlangıç noktası yapın",
      },
      {
        type: "p",
        text: "Kullanıcı boş bir hücreye tıkladığında araç ve tarih bilgisi zaten bellidir. Aynı bilgileri yeni rezervasyon formunda tekrar seçtirmek hata ve zaman kaybı üretir. Takvimden açılan hızlı rezervasyon penceresi seçilen aracı, başlangıç tarihini ve mümkünse sınıfı hazır getirmelidir; kullanıcı müşteri, bitiş tarihi ve temel fiyat bilgilerini tamamlamalıdır.",
      },
      {
        type: "p",
        text: "Bu özellik yalnız tamamen boş araçlarla sınırlı kalmamalıdır. Aracın başka bir günde rezervasyonu bulunması, seçilen boş aralık için yeni kayıt açılmasına engel değildir. Kontrol, aracın genel durumuna değil **seçilen tarih aralığındaki müsaitliğine** göre yapılmalıdır.",
      },
      {
        type: "h3",
        text: "Sürükle-bırak ne zaman güvenlidir?",
      },
      {
        type: "p",
        text: "Rezervasyonu başka bir araca sürüklemek planlamayı hızlandırır; fakat işlem sessizce tamamlanmamalıdır. Hedef aracın sınıfı, seçilen tarihlerdeki müsaitliği, lokasyonu ve hazırlık tamponu kontrol edilmeli; araç sınıfı değişiyorsa kullanıcıya açıkça gösterilmelidir. İşlem sonrasında kısa bir geri alma seçeneği hatalı taşımaları güvenle düzeltir.",
      },

      {
        type: "h2",
        id: "onerilen-odak",
        text: "8. Takvimin göstermediği riskleri önerilen odakta toplayın",
      },
      {
        type: "p",
        text: "Bazı sorunların takvimde doğal bir satırı yoktur. Araç kiradadır ama ödemenin bir bölümü alınmamıştır. İki rezervasyon çakışmıyordur ama temizlik süresi yetmiyordur. Teslim yaklaşmıştır fakat rezervasyon hâlâ sınıfa bağlıdır ve kesin araç atanmamıştır. Bunların her biri farklı sayfalarda saklanırsa ancak sorun yaşandığında fark edilir.",
      },
      {
        type: "p",
        text: "Önerilen odak alanı bu sinyalleri tek bir operasyon kuyruğunda birleştirmelidir. Sıralama yalnız uyarı türüne göre değil, **kalan süre ve iş etkisine göre** yapılmalıdır: kesin çakışma, gecikme riski, araçsız rezervasyon, açık bakiye ve yaklaşan belge süresi gibi konular kendi bağlamlarıyla gösterilmelidir.",
      },
      {
        type: "quote",
        text: "İyi bir operasyon ekranı yalnız bugünü göstermez; yarın sorun olacak işi bugün görünür kılar.",
      },

      {
        type: "h2",
        id: "takvim-metrikleri",
        text: "9. Takvimin sağlıklı çalıştığını beş metrikle kontrol edin",
      },
      {
        type: "table",
        head: ["Metrik", "Neyi gösterir", "Ne sıklıkla bakılmalı"],
        rows: [
          ["Araç atanmamış yaklaşan rezervasyon", "Teslim hazırlığı riski", "Günlük"],
          ["Asgari tamponun altındaki devir", "Gecikme ve temizlik riski", "Günlük"],
          ["Tek ve iki günlük kırık boşluk", "Atama kaynaklı kapasite kaybı", "Haftalık"],
          ["Sınıf ve lokasyon bazlı doluluk", "Talep ile filo dağılımının uyumu", "Haftalık"],
          ["Araç başına gelir ve boş gün", "Takvim kararının finansal sonucu", "Aylık"],
        ],
      },
      {
        type: "p",
        text: "Doluluk oranını tek başına başarı kabul etmeyin. Takvim dolarken fiyat veya operasyon maliyeti bozuluyorsa sonuç kârlı olmayabilir. Doluluk, araç başı gelir ve boşta kalma süresinin birlikte nasıl okunacağını [filo kârlılığı için doğru metrikler](/blog/dogru-metriklerle-filo-karliligini-artirma) yazısında anlattık.",
      },

      {
        type: "h2",
        id: "gunluk-rutin",
        text: "10. Uygulanabilir günlük rezervasyon rutini",
      },
      {
        type: "ol",
        items: [
          "Güne başlarken önünüzdeki 48 saatin teslim, iade, araç atanmamış rezervasyon ve hazırlık risklerini kontrol edin.",
          "İade saatlerini lokasyona göre gruplayın; temizlik ve transfer görevlerini sorumlu kişilere dağıtın.",
          "Yeni rezervasyonu kaydederken önce sınıfı ve aralığı doğrulayın, ardından en az kırık gün üreten aracı değerlendirin.",
          "Kesin çakışmaları hemen çözün; tampon ve lokasyon risklerini teslim yaklaşmadan araç, saat veya görev planıyla kapatın.",
          "Gün sonunda ertesi günün araç atamalarını, açık bakiyelerini ve belge uyarılarını son kez gözden geçirin.",
          "Haftada bir sınıf bazlı doluluk, kırık gün ve devir süresi eğilimini değerlendirin; tek bir güne bakarak filo kararı vermeyin.",
        ],
      },
      {
        type: "h2",
        id: "sonuc",
        text: "Takvimin amacı daha çok renk göstermek değil, daha erken karar verdirmektir",
      },
      {
        type: "p",
        text: "İyi yönetilen bir rezervasyon takvimi, kiradaki ve boş araçları ayırmanın ötesine geçer. Aracın nerede olduğunu, bir sonraki işe hazırlanıp hazırlanamayacağını, rezervasyonun kesin plakaya bağlanıp bağlanmadığını ve hangi kararın kırık gün üreteceğini aynı bağlamda gösterir.",
      },
      {
        type: "p",
        text: "Başlangıç için bütün sistemi bir günde değiştirmek gerekmez. Önce araç durumlarını standardize edin, sonra sınıfa göre atama ve hazırlık tamponunu kurun; ardından önerilen odak ve metriklerle istisnaları yönetin. Amaç takvimi doldurmak değil, **taahhüt ettiğiniz her teslimi zamanında ve doğru araçla gerçekleştirebileceğiniz bir plan oluşturmaktır.**",
      },
    ],
  },
];

export const upcomingPosts: UpcomingPost[] = [];

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
