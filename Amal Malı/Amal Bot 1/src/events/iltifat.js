const conf = require("../configs/sunucuayar.json")
const moment = require("moment");
require("moment-duration-format");
moment.locale("tr");

    let iltifatSayi = 0;
    let iltifatlar = [
      "Mucizelerden bahsediyordum. Tam o sırada gözlerin geldi aklıma.",
      "Benim için mutluluğun tanımı, seninle birlikteyken geçirdiğim vakittir.",
      "Mavi gözlerin, gökyüzü oldu dünyamın.",
      "Seni gören kelebekler, narinliğin karşısında mest olur.",
      "Parlayan gözlerin ile karanlık gecelerime ay gibi doğuyorsun.",
      "Sabah olmuş. Sen mi uyandın yoksa gönlüme güneş mi doğdu.",
      "Huzur kokuyor geçtiğin her yer.",
      "En güzel manzaramsın benim, seyretmeye doyamadığım.",
      "Sen benim düşlerimin surete bürünmüş halisin.",
      "Bir sahil kasabasının huzuru birikmiş yüzüne.",
      "Gülüşünde nice ilaçlar var yarama merhem olan.",
      "Gece nasıl sabahı bekliyorsa aydınlanmak için ben de seni öyle bekliyorum.",
      "Işığınla gecemi aydınlatıyorsun.",
      "Yağmurdan sonra açan gök kuşağı gibisin, öyle güzel ve özel!",
      "Öyle bir duru güzelliğin var ki, seni gören şairler bile adına günlerce şiir yazardı.",
      "Gözlerinin hareketi bile yeter  benim aklımı başımdan almaya.",
      "Seni kelimeler ile anlatmak çok zor. Muhteşem desem yine eksik kalıyor anlamın.",
      "Güller bile kıskanır seni gördükleri zaman kendi güzelliklerini.",
      "Hiç yazılmamış bir şiirsin sen, daha önce eşi benzeri olmayan.",
      "Bu kadar muhteşem olamaz bir insan. Bu kadar kusursuz bu kadar mükemmel.. Kirpiklerinin dizilişi bile sırayla senin.",
      "Adım şaire çıktı civarda. Kimse senin şiir olduğunun farkında değil henüz.",
      "Senin güzelliğini anlatmaya dünyalar değil, lisanlar bile yetmez.",
      "Etkili gülüş kavramını ben senden öğrendim.",
      "Seni yanlışlıkla cennetten düşürmüşler. Dünyada yaşayan bir meleksin sen.",
      "Seni anlatmaya kelimeler bulamıyorum. Nasıl anlatacağımı bilemediğim için seni kimselere anlatamıyorum.",
      "Gözlerinin gördüğü her yer benimdir. Bakışına şahit olan her toprak benim de vatanımdır.",
      "Gözlerinle baharı getirdin garip gönlüme.",
      "Bir gülüşün ile çiçek açıyor bahçemdeki her bir çiçek.",
      "Yuva kokuyor kucağın. Sarılınca seninle yuva kurası geliyor insanın.",
      "Seni de bu dünyada görünce yaşama sebebimi anladım. Meğer senmişsin beni dünyada yaşamaya zorlayan.",
      "Sen bu  dünyadaki bütün şarkıların tek sahibisin. Sana yazılıyor bütün şarkılar ve şiirler. Adın geçiyor bütün namelerde.",
      "Sen benim yanımda olduğun sürece benim nerde olduğum hiç önemli değil .Kokunu aldığım her yer cennet bana.",
      "Seni yüreğimde taşıyorum ben, sırtımda taşımak ne kelime. Ömrüm boyunca çekmeye hazırım her anlamda senin yükünü.",
      "Hayatıma gelerek hayatımdaki bütün önemli şeylerin önemsiz olmasını sağladın. Artık sensin tek önem verdiğim şu hayatta.",
      "Sen benim bu hayattaki en büyük duamsın.  Gözlerin adeta bir ay parçası. Işık oluyorsun karanlık gecelerime.",
      "Aynı zaman diliminde yaşamak benim için büyük ödüldür.",
      "Seninle aşkı yaşamak çok güzel bir şey ama sensiz kalma korkusunu düşünmek korkutuyor beni.",
      "Seni severek meslek sahibi oldum ben. Seni sevmeye başladıkça şair oldum.",
      "Gülüşün güzelliğine anlam katıyor. Gamzelerin ise bambaşka diyarların kapılarını açıyor.",
      "Senin gülüşünü gördüğüm günden beri ağlamalarımı unuttum.",
      "Kimse konuşmasın yalnız sen konuş bana. Yalnız sen bak gözlerimin içine. Kimse olmasın yalnızca sen ol benim hayatımda.",
      "Ben seninle birlikte yaşayabilmek için ikinci kere geldim hayata.",
      "Senin attığın adımlarda seni korumak için geçtiğin yol olmak isterdim. Seni emniyete alan ve sonsuz bir yolculuğa çıkaran bir yol.",
      "Tak jileti dudağına şah damarımdan öp beni!",
      "Mucizelerden bahsediyordum. Tam o sırada gözlerin geldi aklıma.",
      "Benim için mutluluğun tanımı, seninle birlikteyken geçirdiğim vakittir.",
      "Mavi gözlerin, gökyüzü oldu dünyamın.",
      "Seni gören kelebekler, narinliğin karşısında mest olur.",
      "Parlayan gözlerin ile karanlık gecelerime ay gibi doğuyorsun.",
      "Sabah olmuş. Sen mi uyandın yoksa gönlüme güneş mi doğdu.",
      "Huzur kokuyor geçtiğin her yer.",
      "En güzel manzaramsın benim, seyretmeye doyamadığım.",
      "Sen benim düşlerimin surete bürünmüş halisin.",
      "Bir sahil kasabasının huzuru birikmiş yüzüne.",
      "Gülüşünde nice ilaçlar var yarama merhem olan.",
      "Gece nasıl sabahı bekliyorsa aydınlanmak için ben de seni öyle bekliyorum.",
      "Işığınla gecemi aydınlatıyorsun.",
      "Yağmurdan sonra açan gök kuşağı gibisin, öyle güzel ve özel!",
      "Öyle bir duru güzelliğin var ki, seni gören şairler bile adına günlerce şiir yazardı.",
      "Gözlerinin hareketi bile yeter  benim aklımı başımdan almaya.",
      "Seni kelimeler ile anlatmak çok zor. Muhteşem desem yine eksik kalıyor anlamın.",
      "Güller bile kıskanır seni gördükleri zaman kendi güzelliklerini.",
      "Hiç yazılmamış bir şiirsin sen, daha önce eşi benzeri olmayan.",
      "Bu kadar muhteşem olamaz bir insan. Bu kadar kusursuz bu kadar mükemmel.. Kirpiklerinin dizilişi bile sırayla senin.",
      "Adım şaire çıktı civarda. Kimse senin şiir olduğunun farkında değil henüz.",
      "Senin güzelliğini anlatmaya dünyalar değil, lisanlar bile yetmez.",
      "Etkili gülüş kavramını ben senden öğrendim.",
      "Seni yanlışlıkla cennetten düşürmüşler. Dünyada yaşayan bir meleksin sen.",
      "Seni anlatmaya kelimeler bulamıyorum. Nasıl anlatacağımı bilemediğim için seni kimselere anlatamıyorum.",
      "Gözlerinin gördüğü her yer benimdir. Bakışına şahit olan her toprak benim de vatanımdır.",
      "Gözlerinle baharı getirdin garip gönlüme.",
      "Bir gülüşün ile çiçek açıyor bahçemdeki her bir çiçek.",
      "Yuva kokuyor kucağın. Sarılınca seninle yuva kurası geliyor insanın.",
      "Seni de bu dünyada görünce yaşama sebebimi anladım. Meğer senmişsin beni dünyada yaşamaya zorlayan.",
      "Sen bu  dünyadaki bütün şarkıların tek sahibisin. Sana yazılıyor bütün şarkılar ve şiirler. Adın geçiyor bütün namelerde.",
      "Sen benim yanımda olduğun sürece benim nerde olduğum hiç önemli değil .Kokunu aldığım her yer cennet bana.",
      "Seni yüreğimde taşıyorum ben, sırtımda taşımak ne kelime. Ömrüm boyunca çekmeye hazırım her anlamda senin yükünü.",
      "Hayatıma gelerek hayatımdaki bütün önemli şeylerin önemsiz olmasını sağladın. Artık sensin tek önem verdiğim şu hayatta.",
      "Sen benim bu hayattaki en büyük duamsın.  Gözlerin adeta bir ay parçası. Işık oluyorsun karanlık gecelerime.",
      "Aynı zaman diliminde yaşamak benim için büyük ödüldür.",
      "Seninle aşkı yaşamak çok güzel bir şey ama sensiz kalma korkusunu düşünmek korkutuyor beni.",
      "Seni severek meslek sahibi oldum ben. Seni sevmeye başladıkça şair oldum.",
      "Gülüşün güzelliğine anlam katıyor. Gamzelerin ise bambaşka diyarların kapılarını açıyor.",
      "Senin gülüşünü gördüğüm günden beri ağlamalarımı unuttum.",
      "Kimse konuşmasın yalnız sen konuş bana. Yalnız sen bak gözlerimin içine. Kimse olmasın yalnızca sen ol benim hayatımda.",
      "Ben seninle birlikte yaşayabilmek için ikinci kere geldim hayata.",
      "Senin attığın adımlarda seni korumak için geçtiğin yol olmak isterdim. Seni emniyete alan ve sonsuz bir yolculuğa çıkaran bir yol.",
      "Aklıma sevmek geldiğinde, gözlerimin önüne sen geliyorsun. Günün her saati canım sevmek istiyor ve seni düşünüyor kalbim",
      "Kalbimin tek sahibisin.",
      "Bu gce birşeyler yapsak mı ?  🔥",
      "Yanlıyorum beni söndürmek istermisin 🔥",
      "Tak jileti dudağına şah damarımdan öp beni!",
      "Oha bu çocuk Türk müüüüüüüüüüüü?",
      "dur beynimi çıkarayım, eşit şartlarda konuşalım",
      "gitsen tek kaybım mal kaybı olur hahaha",
      "bunun adı kalp güzelim. Tersten okuduğun gibi plak değil ki sürekli sende takılı kalsın.",
      "kafamı yaşasan kafana sıkarsın",
      "sanırım seni getiren leyleğin bıraktığı izdi, kuş beyinli olman.",
      "senin için savaşırdım ama verimsiz toprakları feth etmeye gerek yok",
      "birbirimizi çift görmem için kaç duble daha içmeliyim?",
      "azrail bile ayağıma geliyor ne bu tripler?",
      "Buralarda yeniyim de kalbinin yolunu tarif eder misin?",
      "Nasıl yani şimdi sen gerçek misin?",
      "Bunca zaman neredeydin ?",
      "seni seviyorum.",
      "Allah seni yaratmış fakat takip etmiyor sanırım, bu tip ne?",
      "sarılalım mı?",
      "benimle evlenir misin?",
      "azıcık beynini kullan diyeceğim fakat seni zor durumda bırakmak istemiyorum.",
      "akıllara zarar bi mükemmelliğin var",
      "attan indiysek leopar falan gelmiştir ben anlamam eşekten",
      "dedikodu yapalım mı?",
      "iyi ki varsın 💕",
      "şu üstteki aptik ne anlatıyor ya?",
      "o kadar haklısın ki... seni öpesim var",
      "öpşuelimi? çabuk!",
      "yavrum hepsi senin mi?",
      "bi alo de gelmezsem gençliğim solsun.",
      "çok şişkosun.",
      "sevgilim var yazma?",
      "zenginsen evlenelim mi?",
      "halk pazarı gibisin canım sana olan tek ilgim ucuzluğundan",
      "o kadar çok meslek türü varken neden şerefsizlik tatlım?",
      "bu güne aynayı öperek başladım",
      "çok bereketli topraklarımız yok mu? her türlü şerefsiz yetişiyor",
      "taş gibisin!",
      "kalitesizliğinin kokusu geldi...",
      "Şey gözlerin çok güzelmiş tanışalım mı ?",
      "Kalbinin yolunu gösterir misin...",
      "Corona olsan bile sana sarılırdım",
      "Oha sen gerçek misin ?",
      "kahveyi sütsüz seni tereddütsüz seviyorum",
      "senin hava attığın yerde benim rüzgarım esiyor",
      "çok güzel bi tablo gördüm tam alacaktım ama aynaymış...",
      "canım haddin hariç her şeyi biliyorsun",
      "havalar alev gibii, tatile serin bi yerlere gitsene mesela morg?",
      "tavla oynayalım ama sen beni tavla",
      "hava sıcak değil aşkından yanıyorum",
      "konum atta belamızı bulalım bebeğim",
      "üşüdüysen sana abayı yakayım mı?",
      "gel biraz otur yanıma ölünce gidersin",
      "sütüm yarım yağlı mutluluğum sana bağlı",
      "eğer ahtapot olsaydım üç kalbimi de sana verirdim",
      "salağa yatarken uyuya falan mı kaldın?",
      "meleksin ama canımı alıyorsun yoksa Azrailim misin?",
      "ben varya fay hattı olsam kesin daha az kırılırdım",
      "iban at hayallerimi yollayayım harcarsın",
      "ankarada deniz sende karakter",
      "sana hayatım diyorum çünkü o kadar kötüsün",
      "görüşelim mi? mahşer yeri uygun mu?",
      "eşekten yarış atı olmaz ama sen genede koş spor yaparsın",
      "Anlatsana biraz neden bu kadar mükemmelsin?",
      "Nasılsın diye sorma bebeğim, sana göreyim kıpss",
      "Kakaolu sütsün seni sevmeyen ölsün",
      "Ya sen hep böyle hoşuma mı gideceksin ?",
      "Çikolatalı keksin bu alemde teksin",
      "8 milyar gülüş varken seninki favorim",
      "dalin gibi kokuyorsun",
      "seni her gün görenlerin şansından istiyorum",
      "en iyisine layıksın yani bana hıh",
      "ateşimin çıkma sebebi corona değil, sensin",
      "yemeğimi yedim şimdi seni yeme vakti",
      "beni biraz takar mısın?",
      "aklın başına gelir ama ben sana gelmem",
      "sen beni birde sevgilinken gör",
      "naber lan karakter kanseri",
      "soğuk davranacaksan üzerime bir şey alayım?",
      "sana beyin alacam",
      "Allah belanı vermiyor artık ben bir şey yapacağım",
      "artık benimsin",
      "o kadar pubg oynadım böyle vurulmadım",
      "canın yandı mı? cenneten düşerken?",
      "seni mumla ararken elektrikler geldi",
      "burnunda sümük var",
      "Suyun içinde klorür senin kalbinde bir ömür...",
      "Çok tatlı olmayı bırak artık... Kalbim başa çıkamıyor !",
      "Kalbini dinle dediklerinde seni dinleyesim geliyor",
      "Polisi arıyorum çünkü bu kadar tatlı olman yasadışı !",
      "Ölüm ani dünya fani bi kere sevsen nolur ki yani ?",
      "Bana yüzünü dönme gece oluyor sanıyorum.",
      "Güneş aya ben sana tutuldum.",
      "Sana gemi alalım dümende bir numarasın.",
      "AÇILIN DÜNYANIN 8.HARİKASI GELDİ !",
      "Ben küçücük bi botum ama sana kocaman sarılırım",
      "Kafam çok güzel çünkü içinde sen varsın.",
      "Alnın güzelmiş yazısı olabilir miyim ?",
      "Gülüşün şimşek içermiyiz birer milkşeyk ?",
	  "Gözlerindeki saklı cenneti benden başkası fark etsin istemiyorum.",
  "Mavi gözlerin, gökyüzü oldu dünyamın.",
  "Parlayan gözlerin ile karanlık gecelerime ay gibi doğuyorsun.",
  "Huzur kokuyor geçtiğin her yer.",
  "Öyle bir duru güzelliğin var ki, seni gören şairler bile adına günlerce şiir yazardı.",
  "Gözlerinin hareketi bile yeter  benim aklımı başımdan almaya.",
  "Güller bile kıskanır seni gördükleri zaman kendi güzelliklerini.",
   "Hiç yazılmamış bir şiirsin sen, daha önce eşi benzeri olmayan.",
   "Adım şaire çıktı civarda. Kimse senin şiir olduğunun farkında değil henüz.",
   "Etkili gülüş kavramını ben senden öğrendim.",
   "Seni anlatmaya kelimeler bulamıyorum. Nasıl anlatacağımı bilemediğim için seni kimselere anlatamıyorum.",
   "Gözlerinle baharı getirdin garip gönlüme.",
   "Bir gülüşün ile çiçek açıyor bahçemdeki her bir çiçek.",
   "Yuva kokuyor kucağın. Sarılınca seninle yuva kurası geliyor insanın.",
   "Sen bu  dünyadaki bütün şarkıların tek sahibisin. Sana yazılıyor bütün şarkılar ve şiirler. Adın geçiyor bütün namelerde.",
   "Seni yüreğimde taşıyorum ben, sırtımda taşımak ne kelime. Ömrüm boyunca çekmeye hazırım her anlamda senin yükünü.",
   "Hayatıma gelerek hayatımdaki bütün önemli şeylerin önemsiz olmasını sağladın. Artık sensin tek önem verdiğim şu hayatta.",
   "Sen benim bu hayattaki en büyük duamsın.  Gözlerin adeta bir ay parçası. Işık oluyorsun karanlık gecelerime.",
   "Aynı zaman diliminde yaşamak benim için büyük ödüldür.",
  "Biraz Çevrendeki İnsanları Takarmısın ?",
  "İğrenç İnsansın!",
   "Kalbime giden yolu aydınlatıyor gözlerin.  Sadece sen görebilirsin kalbimi. Ve sadece ben hissedebilirim bana karşı olan hislerini.",
   "Onu Bunu Boşver de bize gel 2 bira içelim.",
    "Taş gibi kızsın ama okey taşı… Elden elde gidiyorsun farkında değilsin.",
    "Ateş bacayı sardı ❤️‍🔥",
    "Mucizelerden bahsediyordum.",
    "Mucizelerden bahsediyordum. Tam o sırada gözlerin geldi aklıma.",
    "Benim için mutluluğun tanımı, seninle birlikteyken geçirdiğim vakittir.",
    "Mavi gözlerin, gökyüzü oldu dünyamın.",
    "Seni gören kelebekler, narinliğin karşısında mest olur.",
    "Parlayan gözlerin ile karanlık gecelerime ay gibi doğuyorsun.",
    "Sabah olmuş. Sen mi uyandın yoksa gönlüme güneş mi doğdu.",
    "Huzur kokuyor geçtiğin her yer.",
    "En güzel manzaramsın benim, seyretmeye doyamadığım.",
    "Öyle bir duru güzelliğin var ki, seni gören şairler bile adına günlerce şiir yazardı.",
    "Gözlerinin hareketi bile yeter  benim aklımı başımdan almaya.",
    "Seni kelimeler ile anlatmak çok zor. Muhteşem desem yine eksik kalıyor anlamın.",
    "Güller bile kıskanır seni gördükleri zaman kendi güzelliklerini.",
    "Hiç yazılmamış bir şiirsin sen, daha önce eşi benzeri olmayan.",
    "Bu kadar muhteşem olamaz bir insan. Bu kadar kusursuz bu kadar mükemmel.. Kirpiklerinin dizilişi bile sırayla senin.",
    "Adım şaire çıktı civarda. Kimse senin şiir olduğunun farkında değil henüz.",
    "Senin güzelliğini anlatmaya dünyalar değil, lisanlar bile yetmez.",
    "Etkili gülüş kavramını ben senden öğrendim.",
    "Seni yanlışlıkla cennetten düşürmüşler. Dünyada yaşayan bir meleksin sen.",
    "Seni anlatmaya kelimeler bulamıyorum. Nasıl anlatacağımı bilemediğim için seni kimselere anlatamıyorum.",
    "Gözlerinin gördüğü her yer benimdir. Bakışına şahit olan h er toprak benim de vatanımdır.",
    "Gözlerinle baharı getirdin garip gönlüme.",
    "Bir gülüşün ile çiçek açıyor bahçemdeki her bir çiçek.",
    "Yuva kokuyor kucağın. Sarılınca seninle yuva kurası geliyor insanın.",
    "Seni de bu dünyada görünce yaşama sebebimi anladım. Meğer senmişsin beni dünyada yaşamaya zorlayan.",
    "Sen bu  dünyadaki bütün şarkıların tek sahibisin. Sana yazılıyor bütün şarkılar ve şiirler. Adın geçiyor bütün namelerde.",
    "Sen benim yanımda olduğun sürece benim nerde olduğum hiç önemli değil .Kokunu aldığım her yer cennet bana.",
    "Seni yüreğimde taşıyorum ben, sırtımda taşımak ne kelime. Ömrüm boyunca çekmeye hazırım her anlamda senin yükünü.",
    "Hayatıma gelerek hayatımdaki bütün önemli şeylerin önemsiz olmasını sağladın. Artık sensin tek önem verdiğim şu hayatta.",
    "Sen benim bu hayattaki en büyük duamsın.  Gözlerin adeta bir ay parçası. Işık oluyorsun karanlık gecelerime.",
    "Aynı zaman diliminde yaşamak benim için büyük ödüldür.",
    "Seninle aşkı yaşamak çok güzel bir şey ama sensiz kalma korkusunu düşünmek korkutuyor beni.",
    "Seni severek meslek sahibi oldum ben. Seni sevmeye başladıkça şair oldum.",
    "Gülüşün güzelliğine anlam katıyor. Gamzelerin ise bambaşka diyarların kapılarını açıyor.",
    "Senin gülüşünü gördüğüm günden beri ağlamalarımı unuttum.",
    "Kimse konuşmasın yalnız sen konuş bana. Yalnız sen bak gözlerimin içine. Kimse olmasın yalnızca sen ol benim hayatımda.",
    "Ben seninle birlikte yaşayabilmek için ikinci kere geldim hayata.",
    "Senin attığın adımlarda seni korumak için geçtiğin yol olmak isterdim. Seni emniyete alan ve sonsuz bir yolculuğa çıkaran bir yol.",
    "Aklıma sevmek geldiğinde, gözlerimin önüne sen geliyorsun. Günün her saati canım sevmek istiyor ve seni düşünüyor kalbim."
    ];
    
    module.exports = async (message) => {
        if (message.channel.id === conf.chatChannel && !message.author.bot) {
        iltifatSayi++;
        if (iltifatSayi >= 50) {
          iltifatSayi = 0;
          message.reply({ content: iltifatlar.random()});
        };
      };
    }; 

module.exports.conf = {
  name: "messageCreate",
};
