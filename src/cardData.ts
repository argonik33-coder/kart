export type CardCategory = 'couple' | 'hotwife' | 'public' | 'bdsm';
export type Gender = 'kadın' | 'erkek' | 'ikisi';

export interface Card {
  id: number;
  category: CardCategory;
  gender: Gender;
  task: string;
  intensity: 1 | 2 | 3 | 4 | 5;
}

const coupleCards: Omit<Card, 'id'>[] = [
  // ===== SEVİYE 1 - ISINDIRMA (30 kart) =====
  { category: 'couple', gender: 'erkek', task: 'Partnerinin boynuna 30 saniye boyunca yavaşça öp.', intensity: 1 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin kulak memesini hafifçe ısır ve fısılda.', intensity: 1 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin sırtını parmak uçlarınla okşa, omurgası boyunca in.', intensity: 1 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin dudaklarına buz küpüyle dokun, sonra öp.', intensity: 1 },
  { category: 'couple', gender: 'ikisi', task: 'Birbirinizin gözlerinin içine bakarak 1 dakika boyunca sadece dokunun.', intensity: 1 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin ellerini başının üstüne kaldır ve bileklerinden öp.', intensity: 1 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin göğsüne başını koy ve nefesini hisset, sonra göğsünü öp.', intensity: 1 },
  { category: 'couple', gender: 'ikisi', task: 'Işıkları kapat, sadece dokunarak birbirinizi 2 dakika keşfedin.', intensity: 1 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin ayak bileklerinden dizine kadar yavaşça öp.', intensity: 1 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin tişörtünü yavaşça çıkar ve göğsüne dudaklarınla dokun.', intensity: 1 },
  { category: 'couple', gender: 'erkek', task: 'Partnerine arkadan sarıl ve boynunu öperken kulağına ne yapmak istediğini fısılda.', intensity: 1 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin saçlarını okşa ve alnından öp, sonra dudaklarına in.', intensity: 1 },
  { category: 'couple', gender: 'ikisi', task: '30 saniye boyunca sadece dudaklarınızı birbirine değdirin ama öpüşmeyin.', intensity: 1 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin omuzlarını masaj yap, yavaşça boynuna çık.', intensity: 1 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin parmak uçlarını tek tek öp.', intensity: 1 },
  { category: 'couple', gender: 'ikisi', task: 'Birbirinize en çok hoşunuza giden fiziksel özelliğinizi söyleyin ve oraya öpücük kondurun.', intensity: 1 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini kucağına al ve yavaşça dans et.', intensity: 1 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin beline otur ve göğsüne parmak uçlarınla şekiller çiz.', intensity: 1 },
  { category: 'couple', gender: 'ikisi', task: 'Gözlerinizi kapatın ve birbirinizi sadece kokarak bulun.', intensity: 1 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin ensesine sıcak nefesinle dokun ve yavaşça öp.', intensity: 1 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin göbeğinin etrafını dilinle çiz.', intensity: 1 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin iç bacağını parmak uçlarınla okşa.', intensity: 1 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin üstüne uzan ve 1 dakika boyunca tutkulu öpüş.', intensity: 1 },
  { category: 'couple', gender: 'ikisi', task: 'Birbirinizin en hassas bölgesini keşfetmek için vücudu parmak uçlarıyla tarayın.', intensity: 1 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin kulaklarının arkasını ve boynunu 1 dakika öp.', intensity: 1 },
  { category: 'couple', gender: 'kadın', task: 'Partnerini duvara yasla ve tutkuyla öp.', intensity: 1 },
  { category: 'couple', gender: 'ikisi', task: 'Birbirinizin üzerindeki bir parça kıyafeti dişlerinizle çıkarın.', intensity: 1 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin bel çukurunu yavaşça öp ve okşa.', intensity: 1 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin göğsüne yaslan ve kalp atışını dinle, sonra o bölgeyi öp.', intensity: 1 },
  { category: 'couple', gender: 'ikisi', task: 'Birbirinize 5 farklı yere öpücük kondurun ve sıralamayı hatırlayın.', intensity: 1 },

  // ===== SEVİYE 2 - KIZDIRMA (30 kart) =====
  { category: 'couple', gender: 'erkek', task: 'Partnerinin iç bacaklarını öp ama yukarı çıkma, onu çıldırt.', intensity: 2 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin pantolonunun üstünden onu okşa, 1 dakika boyunca.', intensity: 2 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin kıyafetlerini çıkar ama iç çamaşırını bırak, vücudunu dudaklarınla keşfet.', intensity: 2 },
  { category: 'couple', gender: 'kadın', task: 'Striptiz yap - yavaş ve kışkırtıcı şekilde soyun.', intensity: 2 },
  { category: 'couple', gender: 'ikisi', task: 'Sadece iç çamaşırlarınızla 2 dakika birbirinize sürtünün.', intensity: 2 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin göğüslerini yavaşça öp ve okşa, ama uçlarına dokunma.', intensity: 2 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin kasıklarına yakın bölgeyi öp ama asıl bölgeye dokunma.', intensity: 2 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin kalçalarını kavra ve kendine çek.', intensity: 2 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin kulağına en cesur fantezini fısılda.', intensity: 2 },
  { category: 'couple', gender: 'ikisi', task: 'Birbirinize masaj yapın - sırttan başlayıp yavaşça öne geçin.', intensity: 2 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin iç çamaşırının kenarından parmağını gezdir.', intensity: 2 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin üzerine otur ve kalçalarını yavaşça hareket ettir.', intensity: 2 },
  { category: 'couple', gender: 'ikisi', task: 'Birbirinize sırayla 3 hassas bölgenizi gösterin ve nasıl dokunulmasını istediğinizi anlatın.', intensity: 2 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin göğüs uçlarını dudaklarınla ve dilinle uyar.', intensity: 2 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin boksörünün içine elini yavaşça sok ve okşa.', intensity: 2 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin bütün vücudunu buz küpüyle gez, ardından öp.', intensity: 2 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin önünde kışkırtıcı pozlar ver ve dokundurma.', intensity: 2 },
  { category: 'couple', gender: 'ikisi', task: 'Çıplak sarılın ve 1 dakika boyunca hiç hareket etmeden birbirinizi hissedin.', intensity: 2 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin kalçalarını şaplakla ve tepkisini gözlemle.', intensity: 2 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin kulaklarını yala ve inle.', intensity: 2 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin bacaklarını omzuna al ve iç bacaklarını öp.', intensity: 2 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin sırtına tırnaklarını gezdirip hafifçe çiz.', intensity: 2 },
  { category: 'couple', gender: 'ikisi', task: 'Birbirinize 2 dakika boyunca gözlerinizin içine bakarak mastürbasyon yapın.', intensity: 2 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin iç çamaşırını dişlerinle çıkar.', intensity: 2 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin boynunu ısır ve iz bırak.', intensity: 2 },
  { category: 'couple', gender: 'ikisi', task: 'Duşa birlikte girin ve birbirinizi sabunlayın - her yeri.', intensity: 2 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin göbeğinden aşağıya doğru öpücük yolu yap.', intensity: 2 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin üstüne otur ve üstünü çıkararak göğüslerini yüzüne sür.', intensity: 2 },
  { category: 'couple', gender: 'ikisi', task: 'Birbirinizin vücuduna çikolata sürün ve yalayın.', intensity: 2 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin bacaklarını aç ve iç kısmını nefes ve dudakla uyar.', intensity: 2 },

  // ===== SEVİYE 3 - ATEŞ (30 kart) =====
  { category: 'couple', gender: 'erkek', task: 'Partnerine oral yap - 3 dakika boyunca, yavaş ve tutkulu.', intensity: 3 },
  { category: 'couple', gender: 'kadın', task: 'Partnerine oral yap - sadece ucunu kullanarak başla.', intensity: 3 },
  { category: 'couple', gender: 'ikisi', task: '69 pozisyonunda 3 dakika geçirin.', intensity: 3 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin klitorisini dilinle yavaş daireler çizerek uyar.', intensity: 3 },
  { category: 'couple', gender: 'kadın', task: 'Partnerini elinle boşaltmaya çalış ama son anda dur.', intensity: 3 },
  { category: 'couple', gender: 'erkek', task: 'Partnerine parmaklarınla masaj yap - G noktasını bul.', intensity: 3 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin testislerini nazikçe okşa ve öp.', intensity: 3 },
  { category: 'couple', gender: 'ikisi', task: 'Sadece ucunu sok ve 1 dakika boyunca hareket etmeden bekle.', intensity: 3 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini kucağına al ve ayakta öpüşerek birleşin.', intensity: 3 },
  { category: 'couple', gender: 'kadın', task: 'Üstte ol ve kontrolü tamamen ele al - ritmi sen belirle.', intensity: 3 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini arkadan al ama çok yavaş başla.', intensity: 3 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin üstüne otur ve ters cowgirl pozisyonuna geç.', intensity: 3 },
  { category: 'couple', gender: 'ikisi', task: 'Kaşık pozisyonunda yavaş ve romantik birleşin.', intensity: 3 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin bacaklarını omzuna al ve derin gir.', intensity: 3 },
  { category: 'couple', gender: 'kadın', task: 'Partnerini oral yaparken gözlerinin içine bak.', intensity: 3 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini masanın kenarına oturt ve ayakta birleş.', intensity: 3 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin üstüne otur ve göğüslerini ağzına ver.', intensity: 3 },
  { category: 'couple', gender: 'ikisi', task: 'Birbirinize aynı anda oral yapın, kim daha uzun dayanır?', intensity: 3 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin klitorisini parmağınla uyarırken içine gir.', intensity: 3 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin penisini göğüslerinin arasına al.', intensity: 3 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini duvara yasla ve bacağını kaldırarak birleş.', intensity: 3 },
  { category: 'couple', gender: 'kadın', task: 'Dört ayak üstünde pozisyon al ve partnerini davet et.', intensity: 3 },
  { category: 'couple', gender: 'ikisi', task: 'Yataktan farklı bir yerde (mutfak, salon, banyo) birleşin.', intensity: 3 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini oral yaparken iki parmağını içine sok.', intensity: 3 },
  { category: 'couple', gender: 'kadın', task: 'Partnerine deepthroat yapmaya çalış.', intensity: 3 },
  { category: 'couple', gender: 'ikisi', task: 'Birlikte bir porno izleyin ve gördüklerinizi uygulayın.', intensity: 3 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini yüzüstü yatır ve sırtından kalçalarına kadar öpücüklerle in, sonra birleş.', intensity: 3 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin üstünde zıpla ve saçlarını çek.', intensity: 3 },
  { category: 'couple', gender: 'ikisi', task: 'Ayna karşısında birleşin ve izleyin.', intensity: 3 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini sandalyeye oturt, önünde diz çök ve oral yap.', intensity: 3 },

  // ===== SEVİYE 4 - TUTKULU (30 kart) =====
  { category: 'couple', gender: 'erkek', task: 'Partnerini birden fazla orgazma ulaştırmaya çalış - oral ve parmakla.', intensity: 4 },
  { category: 'couple', gender: 'kadın', task: 'Partnerine yavaş ve derin oral yap, boğazını kullan.', intensity: 4 },
  { category: 'couple', gender: 'ikisi', task: 'Rol yapın: yabancılar olarak tanışıp eve gidin senaryosu.', intensity: 4 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin anal bölgesini dilinle keşfet (rimming).', intensity: 4 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin prostatını parmağınla dışarıdan uyar.', intensity: 4 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini boğazından hafifçe tut ve birleş.', intensity: 4 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin ağzına otur (facesitting).', intensity: 4 },
  { category: 'couple', gender: 'ikisi', task: 'Vibratör veya seks oyuncağı kullanarak birbirinizi uyarın.', intensity: 4 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini sert ve hızlı bir şekilde doggystyle yap.', intensity: 4 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin gözlerini bağla ve onu sadece dokunarak ve öperek çıldırt.', intensity: 4 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin her iki deliğini de parmakla aynı anda uyar.', intensity: 4 },
  { category: 'couple', gender: 'kadın', task: 'Partnerine striptiz yap ve kucak dansı ver, sonra oral yap.', intensity: 4 },
  { category: 'couple', gender: 'ikisi', task: 'Birbirinizi aynı anda mastürbasyon yaparken izleyin, dokunmak yok.', intensity: 4 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini kaldır ve ayakta sik.', intensity: 4 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin üstüne otur, ellerini başının üstünde tut ve hareket et.', intensity: 4 },
  { category: 'couple', gender: 'ikisi', task: 'Balkondan veya pencereden görünebilecek şekilde birleşin.', intensity: 4 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin klitorisini vibratörle uyarırken içinde ol.', intensity: 4 },
  { category: 'couple', gender: 'kadın', task: 'Partnerine anal parmak yap ve oral yap aynı anda.', intensity: 4 },
  { category: 'couple', gender: 'ikisi', task: 'Telefona sesli bir erotik mesaj kaydedin birbiriniz için.', intensity: 4 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin yüzüne veya göğsüne boşal (izin varsa).', intensity: 4 },
  { category: 'couple', gender: 'kadın', task: 'Partnerini ağzında boşalt ve yut (istersen).', intensity: 4 },
  { category: 'couple', gender: 'ikisi', task: 'Birbirinizin vücuduna krem sürün ve kayganlaştırıcıyla masaj yapın.', intensity: 4 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini pile driver pozisyonunda sik.', intensity: 4 },
  { category: 'couple', gender: 'kadın', task: 'Partnerini ata biner gibi ters otur ve hızlan.', intensity: 4 },
  { category: 'couple', gender: 'ikisi', task: 'Seks sırasında birbirinize dirty talk yapın - 3 dakika boyunca.', intensity: 4 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini prone bone pozisyonunda (yüzüstü yatarken) sik.', intensity: 4 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin üstüne otur ve kalçalarını dairesel hareket ettir.', intensity: 4 },
  { category: 'couple', gender: 'ikisi', task: 'Erotik fotoğraf çekin birbirinizin (sadece ikiniz için).', intensity: 4 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini mutfak tezgahına koy ve oral yap.', intensity: 4 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin sırtına bırak ve onu sür - kontrolü tamamen al.', intensity: 4 },

  // ===== SEVİYE 5 - EKSTREM (30 kart) =====
  { category: 'couple', gender: 'erkek', task: 'Partnerine anal seks yap - çok yavaş ve bol kayganlaştırıcıyla.', intensity: 5 },
  { category: 'couple', gender: 'kadın', task: 'Partnerine pegging fantezisi hakkında konuş ve hafifçe dene.', intensity: 5 },
  { category: 'couple', gender: 'ikisi', task: 'Birbirinize seks sırasında sesli video çekin.', intensity: 5 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini squirt ettirmeye çalış.', intensity: 5 },
  { category: 'couple', gender: 'kadın', task: 'Partnerine hem oral hem anal parmak yap aynı anda.', intensity: 5 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin ağzına, göğsüne ve karnına boşal.', intensity: 5 },
  { category: 'couple', gender: 'kadın', task: 'Partnerine tam hakimiyet ver - ne isterse yapsın (güvenli kelime ile).', intensity: 5 },
  { category: 'couple', gender: 'ikisi', task: 'Maratona çıkın - en az 3 farklı pozisyonda birleşin arka arkaya.', intensity: 5 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini 5 kez orgazma ulaştırmaya çalış - ara vermeden.', intensity: 5 },
  { category: 'couple', gender: 'kadın', task: 'Partnerine 30 dakika boyunca oral yap - edge\'le, boşaltma.', intensity: 5 },
  { category: 'couple', gender: 'ikisi', task: 'Birbirinize en karanlık fantezinizi itiraf edin ve birini uygulayın.', intensity: 5 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini her pozisyonda dene - hangisinde en çok zevk aldığını bul.', intensity: 5 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin üzerine otur, anal ve vajinal arasında geçiş yap.', intensity: 5 },
  { category: 'couple', gender: 'ikisi', task: 'Tüm gece boyunca seks yapın - her saat başı farklı şey deneyin.', intensity: 5 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini çift penetrasyon yap - penis ve parmak veya oyuncak.', intensity: 5 },
  { category: 'couple', gender: 'kadın', task: 'Partnerine tam vücut masajı yap ve happy ending ile bitir.', intensity: 5 },
  { category: 'couple', gender: 'ikisi', task: 'Aynada kendinizi izleyerek en sert pozisyonunuzda birleşin.', intensity: 5 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini bağla (el ve ayak) ve istediğin her şeyi yap (güvenli kelime ile).', intensity: 5 },
  { category: 'couple', gender: 'kadın', task: 'Partnerini bağla ve onunla istediğin gibi oyna (güvenli kelime ile).', intensity: 5 },
  { category: 'couple', gender: 'ikisi', task: 'Tantrik seks deneyin - 10 dakika boyunca hareket etmeden birleşik kalın.', intensity: 5 },
  { category: 'couple', gender: 'erkek', task: 'Partnerinin tüm vücuduna boşal ve sonra temizle.', intensity: 5 },
  { category: 'couple', gender: 'kadın', task: 'Cosplay veya kostüm giy ve karakter olarak seks yap.', intensity: 5 },
  { category: 'couple', gender: 'ikisi', task: 'Birbirinize seks kontratı yazın - bu gece kuralları siz koyun.', intensity: 5 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini oral yaparken anal plug kullan.', intensity: 5 },
  { category: 'couple', gender: 'kadın', task: 'Partnerine prostat masajı yap ve boşalt.', intensity: 5 },
  { category: 'couple', gender: 'ikisi', task: 'Seks oyuncakları koleksiyonunuzu kullanın - hepsini deneyin.', intensity: 5 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini boğazından tut, saçlarını çek ve domine et.', intensity: 5 },
  { category: 'couple', gender: 'kadın', task: 'Partnerinin yüzüne otur ve onu nefessiz bırak (güvenli işaret ile).', intensity: 5 },
  { category: 'couple', gender: 'ikisi', task: 'Cam show yapın - birbirinize web kamera üzerinden seks yaparak izletin (birbirinize).', intensity: 5 },
  { category: 'couple', gender: 'erkek', task: 'Partnerini her odada bir kez sik - ev turu yapın.', intensity: 5 },
];

const hotwifeCards: Omit<Card, 'id'>[] = [
  { category: 'hotwife', gender: 'kadın', task: 'Partnerinin yanında başka bir erkeğe kışkırtıcı mesaj at (fantezi).', intensity: 3 },
  { category: 'hotwife', gender: 'erkek', task: 'Partnerine başka biriyle olma fantezisini anlat ve onu uyar.', intensity: 3 },
  { category: 'hotwife', gender: 'kadın', task: 'Partnerine başka bir erkekle nasıl olacağını detaylı anlat.', intensity: 3 },
  { category: 'hotwife', gender: 'ikisi', task: 'Hotwife senaryosu kurgulayın - kadın anlatırken erkek izlesin.', intensity: 3 },
  { category: 'hotwife', gender: 'kadın', task: 'Kışkırtıcı kıyafet giy ve partnerine "başka biri için giyindim" de.', intensity: 3 },
  { category: 'hotwife', gender: 'erkek', task: 'Partnerine "seni izlemek istiyorum" de ve senaryoyu anlat.', intensity: 4 },
  { category: 'hotwife', gender: 'kadın', task: 'Partnerine bir barda başka bir erkekle flört etme fantezini anlat.', intensity: 4 },
  { category: 'hotwife', gender: 'ikisi', task: 'Rol yapın: kadın eve "başka birinden" gelmiş gibi yapsın, erkek sorgulasın ve seks yapın.', intensity: 4 },
  { category: 'hotwife', gender: 'erkek', task: 'Partnerini oral yaparken ona "başka birini düşün" de.', intensity: 4 },
  { category: 'hotwife', gender: 'kadın', task: 'Gözlerin kapalıyken partnerine başka birinin ismini söyle (rol gereği).', intensity: 4 },
  { category: 'hotwife', gender: 'ikisi', task: 'Hotwife pornosu izleyin ve birbirinize ne hissettirdiğini anlatın.', intensity: 3 },
  { category: 'hotwife', gender: 'erkek', task: 'Partnerine ankesör (cuckold) fantezini itiraf et ve tepkisini gör.', intensity: 5 },
  { category: 'hotwife', gender: 'kadın', task: 'Partnerine "dün gece başka biriyleyken..." diye başlayan bir hikaye uydurup anlat.', intensity: 4 },
  { category: 'hotwife', gender: 'ikisi', task: 'Swinger kulüp fantezisi kurgulayın ve rol yapın.', intensity: 5 },
  { category: 'hotwife', gender: 'kadın', task: 'Partnerinin önünde dildo kullan ve "bu o" de.', intensity: 4 },
  { category: 'hotwife', gender: 'erkek', task: 'Partnerinin telefonuna sahte bir "sevgili" mesajı yaz ve rol yapın.', intensity: 3 },
  { category: 'hotwife', gender: 'kadın', task: 'Partnerine "bugün spor hocası çok yakışıklıydı" de ve seks sırasında detay ver.', intensity: 3 },
];

const publicCards: Omit<Card, 'id'>[] = [
  { category: 'public', gender: 'kadın', task: 'İç çamaşırsız dışarı çık ve partnerine söyle.', intensity: 2 },
  { category: 'public', gender: 'erkek', task: 'Partnerinin eteğinin altına restoranda gizlice dokun.', intensity: 3 },
  { category: 'public', gender: 'kadın', task: 'Partnerine halka açık bir yerde sexy selfie gönder (tuvaletten).', intensity: 2 },
  { category: 'public', gender: 'ikisi', task: 'Arabada öpüşün ve birbirinizi okşayın - yakalanma riski ile.', intensity: 3 },
  { category: 'public', gender: 'erkek', task: 'Partnerinin iç çamaşırını çantasına koy ve o gün öyle gezdirin.', intensity: 2 },
  { category: 'public', gender: 'kadın', task: 'Partnerine toplum içinde kışkırtıcı fotoğraf gönder.', intensity: 2 },
  { category: 'public', gender: 'ikisi', task: 'Arabada seks yapın - park halinde, karanlık bir yerde.', intensity: 4 },
  { category: 'public', gender: 'erkek', task: 'Partnerinin eteğinin altından fotoğraf çek (gizlice, sadece ikiniz için).', intensity: 3 },
  { category: 'public', gender: 'kadın', task: 'Dışarıda partnerine kulağına ne yapacağını fısılda ve onu azdır.', intensity: 2 },
  { category: 'public', gender: 'ikisi', task: 'Sinema salonunun arka sırasında birbirinizi okşayın.', intensity: 3 },
  { category: 'public', gender: 'erkek', task: 'Partnerini umumi tuvalette öp ve okşa.', intensity: 3 },
  { category: 'public', gender: 'kadın', task: 'Uzaktan kumandalı vibratör tak ve partnerine kumandayı ver (dışarıda).', intensity: 4 },
  { category: 'public', gender: 'ikisi', task: 'Otelde balkondan görünebilecek şekilde seks yapın.', intensity: 4 },
  { category: 'public', gender: 'erkek', task: 'Partnerinin göğüs dekoltesine bak ve ona ne düşündüğünü anlat - halka açık yerde.', intensity: 2 },
  { category: 'public', gender: 'kadın', task: 'Partnerine asansörde tutkuyla öpüş.', intensity: 3 },
  { category: 'public', gender: 'ikisi', task: 'Doğada (orman, plaj) birleşin.', intensity: 4 },
  { category: 'public', gender: 'kadın', task: 'Toplum içinde partnerine seksi bakışlar at ve dudağını ısır.', intensity: 1 },
];

const bdsmCards: Omit<Card, 'id'>[] = [
  { category: 'bdsm', gender: 'erkek', task: 'Partnerinin ellerini kelepçele veya bağla ve gözlerini kapat.', intensity: 3 },
  { category: 'bdsm', gender: 'kadın', task: 'Partnerine "efendim" veya "sahip" diye hitap et bu gece boyunca.', intensity: 3 },
  { category: 'bdsm', gender: 'erkek', task: 'Partnerinin kalçalarına 10 kez şaplak at - saydır.', intensity: 3 },
  { category: 'bdsm', gender: 'kadın', task: 'Partnerini bağla ve üzerine otur ama hareket etme - yalvarmasını bekle.', intensity: 4 },
  { category: 'bdsm', gender: 'ikisi', task: 'Güvenli kelime belirleyin ve dom/sub rollerini deneyin.', intensity: 3 },
  { category: 'bdsm', gender: 'erkek', task: 'Partnerinin boynuna tasma tak (eşarp/kravat) ve yönlendir.', intensity: 4 },
  { category: 'bdsm', gender: 'kadın', task: 'Domina ol - partnerini diz çöktür ve emirler ver.', intensity: 4 },
  { category: 'bdsm', gender: 'erkek', task: 'Partnerine mum damlat (masaj mumu) ve tepkisini gözle.', intensity: 4 },
  { category: 'bdsm', gender: 'kadın', task: 'Partnerinin penisini sıkıca tut ve boşalmasına izin verme - edge yap.', intensity: 4 },
  { category: 'bdsm', gender: 'ikisi', task: 'Bir BDSM kurallar listesi oluşturun ve bu gece uygulayın.', intensity: 3 },
  { category: 'bdsm', gender: 'erkek', task: 'Partnerini yatağa bağla (dört köşeden) ve istediğini yap.', intensity: 5 },
  { category: 'bdsm', gender: 'kadın', task: 'Partnerini kamçıla (hafif) veya tokat at (izin dahilinde).', intensity: 4 },
  { category: 'bdsm', gender: 'erkek', task: 'Partnerine gag (ağız tıkacı) tak veya külotunu ağzına koy.', intensity: 5 },
  { category: 'bdsm', gender: 'kadın', task: 'Partnerinin üstüne otur ve nefesini kontrol et (breath play - dikkatli!).', intensity: 5 },
  { category: 'bdsm', gender: 'ikisi', task: 'Sado-mazo senaryosu kurgulayın: ceza ve ödül sistemi oluşturun.', intensity: 4 },
  { category: 'bdsm', gender: 'erkek', task: 'Partnerinin saçlarından tutup kafasını yönlendir oral sırasında.', intensity: 4 },
];

export function getAllCards(): Card[] {
  let id = 1;
  const all: Card[] = [];

  for (const c of coupleCards) {
    all.push({ ...c, id: id++ });
  }
  for (const c of hotwifeCards) {
    all.push({ ...c, id: id++ });
  }
  for (const c of publicCards) {
    all.push({ ...c, id: id++ });
  }
  for (const c of bdsmCards) {
    all.push({ ...c, id: id++ });
  }

  return all;
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Kartları kolaydan zora doğru sıralar.
 * Her seviye içindeki kartlar kendi aralarında karıştırılır,
 * ama genel akış 1 → 2 → 3 → 4 → 5 şeklinde ilerler.
 */
export function progressiveSort(cards: Card[]): Card[] {
  const groups: Record<number, Card[]> = { 1: [], 2: [], 3: [], 4: [], 5: [] };
  cards.forEach((card) => {
    groups[card.intensity].push(card);
  });
  // Her seviye grubunu kendi içinde karıştır
  for (const key of [1, 2, 3, 4, 5]) {
    groups[key] = shuffleArray(groups[key]);
  }
  // Sırayla birleştir: kolay → zor
  return [...groups[1], ...groups[2], ...groups[3], ...groups[4], ...groups[5]];
}

export const categoryLabels: Record<CardCategory, string> = {
  couple: '💑 Çift',
  hotwife: '🔥 Hotwife',
  public: '🌍 Public',
  bdsm: '⛓️ BDSM',
};

export const categoryColors: Record<CardCategory, string> = {
  couple: 'from-pink-500 to-rose-600',
  hotwife: 'from-orange-500 to-red-600',
  public: 'from-emerald-500 to-teal-600',
  bdsm: 'from-purple-600 to-violet-800',
};

export const categoryBgColors: Record<CardCategory, string> = {
  couple: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  hotwife: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  public: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  bdsm: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
};

export const intensityLabels: Record<number, string> = {
  1: '🌡️ Isınma',
  2: '🔥 Kızdırma',
  3: '💥 Ateş',
  4: '🌋 Tutkulu',
  5: '☄️ Ekstrem',
};
