import { useState, useCallback } from 'react';
import {
  getAllCards,
  progressiveSort,
  categoryLabels,
  categoryColors,
  categoryBgColors,
  intensityLabels,
  type Card,
  type CardCategory,
} from './cardData';

type GameState = 'menu' | 'playing' | 'finished';

function App() {
  const [gameState, setGameState] = useState<GameState>('menu');
  const [deck, setDeck] = useState<Card[]>([]);
  const [drawnCards, setDrawnCards] = useState<Card[]>([]);
  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Set<CardCategory>>(
    new Set(['couple', 'hotwife', 'public', 'bdsm'])
  );
  const [history, setHistory] = useState<Card[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const totalCards = deck.length + drawnCards.length;
  const remainingCards = deck.length;
  const drawnCount = drawnCards.length;

  const categoryStats = useCallback(() => {
    const stats: Record<CardCategory, { total: number; drawn: number }> = {
      couple: { total: 0, drawn: 0 },
      hotwife: { total: 0, drawn: 0 },
      public: { total: 0, drawn: 0 },
      bdsm: { total: 0, drawn: 0 },
    };
    deck.forEach((c) => stats[c.category].total++);
    drawnCards.forEach((c) => {
      stats[c.category].drawn++;
      stats[c.category].total++;
    });
    // Fix: total should be remaining + drawn for each category
    // Actually let me recalculate
    const allInGame = [...deck, ...drawnCards];
    const result: Record<CardCategory, { total: number; remaining: number; drawn: number }> = {
      couple: { total: 0, remaining: 0, drawn: 0 },
      hotwife: { total: 0, remaining: 0, drawn: 0 },
      public: { total: 0, remaining: 0, drawn: 0 },
      bdsm: { total: 0, remaining: 0, drawn: 0 },
    };
    allInGame.forEach((c) => result[c.category].total++);
    deck.forEach((c) => result[c.category].remaining++);
    drawnCards.forEach((c) => result[c.category].drawn++);
    return result;
  }, [deck, drawnCards]);

  const startGame = useCallback(() => {
    const allCards = getAllCards();
    const filtered = allCards.filter((c) => selectedCategories.has(c.category));
    const sorted = progressiveSort(filtered);
    setDeck(sorted);
    setDrawnCards([]);
    setCurrentCard(null);
    setHistory([]);
    setShowCard(false);
    setGameState('playing');
  }, [selectedCategories]);

  const drawCard = useCallback(() => {
    if (deck.length === 0) {
      setGameState('finished');
      return;
    }

    setIsFlipping(true);
    setShowCard(false);

    setTimeout(() => {
      const [nextCard, ...rest] = deck;
      setCurrentCard(nextCard);
      setDeck(rest);
      setDrawnCards((prev) => [...prev, nextCard]);
      setHistory((prev) => [...prev, nextCard]);
      setShowCard(true);
      setIsFlipping(false);
    }, 600);
  }, [deck]);

  const resetGame = useCallback(() => {
    setGameState('menu');
    setDeck([]);
    setDrawnCards([]);
    setCurrentCard(null);
    setShowCard(false);
    setHistory([]);
  }, []);

  const reshuffleAndRestart = useCallback(() => {
    const allCards = getAllCards();
    const filtered = allCards.filter((c) => selectedCategories.has(c.category));
    const sorted = progressiveSort(filtered);
    setDeck(sorted);
    setDrawnCards([]);
    setCurrentCard(null);
    setShowCard(false);
    setHistory([]);
    setGameState('playing');
  }, [selectedCategories]);

  const toggleCategory = (cat: CardCategory) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        if (next.size > 1) next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  };

  const getGenderIcon = (gender: string) => {
    switch (gender) {
      case 'kadın':
        return '♀️';
      case 'erkek':
        return '♂️';
      case 'ikisi':
        return '💑';
      default:
        return '❓';
    }
  };

  const getGenderLabel = (gender: string) => {
    switch (gender) {
      case 'kadın':
        return 'Kadın yapacak';
      case 'erkek':
        return 'Erkek yapacak';
      case 'ikisi':
        return 'İkisi birlikte';
      default:
        return '';
    }
  };

  const getGenderColor = (gender: string) => {
    switch (gender) {
      case 'kadın':
        return 'bg-pink-500/30 text-pink-200 border-pink-400/40';
      case 'erkek':
        return 'bg-blue-500/30 text-blue-200 border-blue-400/40';
      case 'ikisi':
        return 'bg-purple-500/30 text-purple-200 border-purple-400/40';
      default:
        return '';
    }
  };

  const getIntensityStars = (intensity: number) => {
    return '🔥'.repeat(intensity);
  };

  // ===== MENU SCREEN =====
  if (gameState === 'menu') {
    const allCards = getAllCards();
    const catCounts: Record<CardCategory, number> = { couple: 0, hotwife: 0, public: 0, bdsm: 0 };
    allCards.forEach((c) => catCounts[c.category]++);
    const selectedCount = allCards.filter((c) => selectedCategories.has(c.category)).length;

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center p-4">
        <div className="max-w-lg w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 animate-pulse">🃏</div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
              Erotik Kart Oyunu
            </h1>
            <p className="text-gray-400 mt-2 text-lg">Çiftler için cesur bir gece 🔥</p>
            <div className="mt-3 inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="text-gray-300 text-sm">200 Görev Kartı</span>
            </div>
          </div>

          {/* Category Selection */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
            <h2 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span>📂</span> Kategori Seçimi
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {(Object.keys(categoryLabels) as CardCategory[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    selectedCategories.has(cat)
                      ? `border-white/30 bg-gradient-to-br ${categoryColors[cat]} shadow-lg scale-[1.02]`
                      : 'border-white/10 bg-white/5 opacity-50 hover:opacity-70'
                  }`}
                >
                  <div className="text-white font-medium text-sm">{categoryLabels[cat]}</div>
                  <div className="text-white/60 text-xs mt-1">{catCounts[cat]} kart</div>
                  {selectedCategories.has(cat) && (
                    <div className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xs font-bold">✓</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
            <div className="mt-4 text-center text-gray-400 text-sm">
              Seçilen: <span className="text-white font-semibold">{selectedCount}</span> kart
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
            <h2 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
              <span>📋</span> Nasıl Oynanır?
            </h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-0.5">1.</span>
                <span>Kategorileri seçin ve "Başla" butonuna basın</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-0.5">2.</span>
                <span>Kartlar <strong className="text-pink-300">kolaydan zora</strong> doğru sıralanır — önce ısınma, sonra ateş!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-0.5">3.</span>
                <span>Her kart kimin yapacağını (♀️/♂️/💑) ve görevi gösterir</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-0.5">4.</span>
                <span>Görevi tamamlayın ve sonraki kartı çekin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-0.5">5.</span>
                <span>Deste bitince karıştırıp tekrar başlayabilirsiniz</span>
              </li>
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-gray-300 text-xs font-medium mb-2">📈 Seviye Akışı:</p>
              <div className="flex items-center gap-1 text-xs">
                <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-300">🌡️ Isınma</span>
                <span className="text-gray-600">→</span>
                <span className="px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300">🔥 Kızdırma</span>
                <span className="text-gray-600">→</span>
                <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-300">💥 Ateş</span>
                <span className="text-gray-600">→</span>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-300">🌋 Tutku</span>
                <span className="text-gray-600">→</span>
                <span className="px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300">☄️ Ekstrem</span>
              </div>
            </div>
            <div className="mt-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
              <p className="text-yellow-300 text-xs">
                ⚠️ Güvenli kelime belirleyin! Her iki taraf da rahat olmalı. İstemediğiniz kartı atlayabilirsiniz.
              </p>
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={startGame}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white font-bold text-xl shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            🔥 Oyuna Başla
          </button>
        </div>
      </div>
    );
  }

  // ===== FINISHED SCREEN =====
  if (gameState === 'finished') {
    const stats = categoryStats();
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center p-4">
        <div className="max-w-lg w-full text-center">
          <div className="text-7xl mb-6">🎉</div>
          <h1 className="text-3xl font-bold text-white mb-2">Deste Bitti!</h1>
          <p className="text-gray-400 text-lg mb-8">
            Toplam <span className="text-pink-400 font-bold">{drawnCards.length}</span> kart çektiniz
          </p>

          {/* Stats */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-6">
            <h3 className="text-white font-semibold mb-4">📊 İstatistikler</h3>
            <div className="grid grid-cols-2 gap-3">
              {(Object.keys(categoryLabels) as CardCategory[]).map((cat) => (
                stats[cat].total > 0 && (
                  <div key={cat} className={`p-3 rounded-xl ${categoryBgColors[cat]} border`}>
                    <div className="font-medium text-sm">{categoryLabels[cat]}</div>
                    <div className="text-2xl font-bold">{stats[cat].drawn}</div>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Gender Stats */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
            <h3 className="text-white font-semibold mb-4">👫 Cinsiyet Dağılımı</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-pink-500/20 border border-pink-500/30">
                <div className="text-pink-300 text-sm">♀️ Kadın</div>
                <div className="text-white text-xl font-bold">
                  {drawnCards.filter((c) => c.gender === 'kadın').length}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                <div className="text-blue-300 text-sm">♂️ Erkek</div>
                <div className="text-white text-xl font-bold">
                  {drawnCards.filter((c) => c.gender === 'erkek').length}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30">
                <div className="text-purple-300 text-sm">💑 İkisi</div>
                <div className="text-white text-xl font-bold">
                  {drawnCards.filter((c) => c.gender === 'ikisi').length}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={reshuffleAndRestart}
              className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold text-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              🔄 Karıştır & Tekrar Başla
            </button>
            <button
              onClick={resetGame}
              className="py-4 px-6 rounded-2xl bg-white/10 text-white font-bold border border-white/20 hover:bg-white/20 transition-all"
            >
              🏠
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===== PLAYING SCREEN =====
  const stats = categoryStats();
  const progressPercent = totalCards > 0 ? (drawnCount / totalCards) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex flex-col">
      {/* Top Bar */}
      <div className="p-4 flex items-center justify-between border-b border-white/10 bg-black/30 backdrop-blur-sm">
        <button
          onClick={resetGame}
          className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
        >
          ← Ana Menü
        </button>
        <div className="text-white font-semibold text-sm flex items-center gap-2">
          <span>🃏</span>
          <span className="text-pink-400">{drawnCount}</span>
          <span className="text-gray-500">/</span>
          <span>{totalCards}</span>
        </div>
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
        >
          📜 Geçmiş
        </button>
      </div>

      {/* Progress Bar */}
      <div className="px-4 pt-3">
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink-500 to-red-500 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-500">
          <span>Çekilen: {drawnCount}</span>
          <span>Kalan: {remainingCards}</span>
        </div>
      </div>

      {/* Intensity Phase Indicator */}
      {(() => {
        const currentIntensity = deck.length > 0 ? deck[0].intensity : (currentCard ? currentCard.intensity : 1);
        const intensityColorMap: Record<number, string> = {
          1: 'from-green-400 to-emerald-500',
          2: 'from-yellow-400 to-amber-500',
          3: 'from-orange-400 to-orange-600',
          4: 'from-red-400 to-red-600',
          5: 'from-fuchsia-500 to-purple-700',
        };
        const intensityBgMap: Record<number, string> = {
          1: 'bg-green-500/15 border-green-500/30',
          2: 'bg-yellow-500/15 border-yellow-500/30',
          3: 'bg-orange-500/15 border-orange-500/30',
          4: 'bg-red-500/15 border-red-500/30',
          5: 'bg-fuchsia-500/15 border-fuchsia-500/30',
        };
        return (
          <div className="px-4 pt-3">
            <div className={`rounded-xl border p-3 ${intensityBgMap[currentIntensity]}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white text-xs font-semibold">🎯 Mevcut Aşama</span>
                <span className="text-white/80 text-xs font-bold">{intensityLabels[currentIntensity]}</span>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                      level <= currentIntensity
                        ? `bg-gradient-to-r ${intensityColorMap[level]}`
                        : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1.5">
                {[1, 2, 3, 4, 5].map((level) => (
                  <span
                    key={level}
                    className={`text-[9px] font-medium transition-colors ${
                      level === currentIntensity ? 'text-white' : 'text-white/30'
                    }`}
                  >
                    {level === 1 ? 'Isınma' : level === 2 ? 'Kızdır' : level === 3 ? 'Ateş' : level === 4 ? 'Tutku' : 'Ekstrm'}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })()}

      {/* Category Stats Bar */}
      <div className="px-4 pt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {(Object.keys(categoryLabels) as CardCategory[]).map(
          (cat) =>
            stats[cat].total > 0 && (
              <div
                key={cat}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs border ${categoryBgColors[cat]} flex items-center gap-1.5`}
              >
                <span>{categoryLabels[cat]}</span>
                <span className="font-bold">{stats[cat].remaining}</span>
              </div>
            )
        )}
      </div>

      {/* Main Card Area */}
      <div className="flex-1 flex items-center justify-center p-4">
        {!currentCard && !isFlipping ? (
          // Initial state - no card drawn yet
          <div className="text-center">
            <div
              className="w-72 h-96 mx-auto rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-white/10 flex items-center justify-center cursor-pointer hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 group"
              onClick={drawCard}
            >
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🃏</div>
                <p className="text-gray-400 group-hover:text-pink-300 transition-colors font-medium">
                  Kart Çekmek İçin
                </p>
                <p className="text-gray-400 group-hover:text-pink-300 transition-colors font-medium">
                  Dokun
                </p>
              </div>
            </div>
          </div>
        ) : (
          // Card display area
          <div className="w-full max-w-sm">
            <div
              className={`relative w-full transition-all duration-500 ${
                isFlipping ? 'scale-95 opacity-50 rotate-y-180' : 'scale-100 opacity-100'
              }`}
              style={{ perspective: '1000px' }}
            >
              {showCard && currentCard && (
                <div className="w-full animate-fade-in">
                  {/* Card */}
                  <div
                    className={`w-full rounded-3xl bg-gradient-to-br ${
                      categoryColors[currentCard.category]
                    } p-[2px] shadow-2xl shadow-black/50`}
                  >
                    <div className="w-full rounded-3xl bg-gray-900/95 backdrop-blur-sm p-6 space-y-5">
                      {/* Card Header */}
                      <div className="flex items-center justify-between">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${
                            categoryBgColors[currentCard.category]
                          }`}
                        >
                          {categoryLabels[currentCard.category]}
                        </span>
                        <span className="text-gray-500 text-xs font-mono">
                          #{currentCard.id}
                        </span>
                      </div>

                      {/* Gender Badge */}
                      <div className="flex justify-center">
                        <div
                          className={`px-5 py-2.5 rounded-2xl border ${getGenderColor(
                            currentCard.gender
                          )} text-center`}
                        >
                          <div className="text-3xl mb-1">{getGenderIcon(currentCard.gender)}</div>
                          <div className="font-semibold text-sm">{getGenderLabel(currentCard.gender)}</div>
                        </div>
                      </div>

                      {/* Task */}
                      <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                        <p className="text-white text-base leading-relaxed text-center font-medium">
                          {currentCard.task}
                        </p>
                      </div>

                      {/* Intensity */}
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-gray-500">Seviye: </span>
                          <span className="text-white">
                            {intensityLabels[currentCard.intensity]}
                          </span>
                        </div>
                        <div className="text-sm tracking-wider">
                          {getIntensityStars(currentCard.intensity)}
                        </div>
                      </div>

                      {/* Card Number / Progress */}
                      <div className="text-center">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                          <span className="text-gray-400 text-xs">
                            Kart {drawnCount} / {totalCards}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            {showCard && (
              <div className="mt-6 flex gap-3">
                <button
                  onClick={drawCard}
                  disabled={isFlipping}
                  className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white font-bold text-lg shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {remainingCards > 0 ? '🃏 Sonraki Kart' : '🎉 Desteyi Bitir'}
                </button>
                <button
                  onClick={drawCard}
                  disabled={isFlipping}
                  className="py-4 px-4 rounded-2xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all text-sm disabled:opacity-50"
                  title="Bu kartı atla"
                >
                  ⏭️
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Stats */}
      <div className="p-4 border-t border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2 rounded-xl bg-pink-500/10 border border-pink-500/20">
            <div className="text-pink-300 text-xs">♀️ Kadın</div>
            <div className="text-white font-bold">
              {drawnCards.filter((c) => c.gender === 'kadın').length}
            </div>
          </div>
          <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <div className="text-blue-300 text-xs">♂️ Erkek</div>
            <div className="text-white font-bold">
              {drawnCards.filter((c) => c.gender === 'erkek').length}
            </div>
          </div>
          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <div className="text-purple-300 text-xs">💑 İkisi</div>
            <div className="text-white font-bold">
              {drawnCards.filter((c) => c.gender === 'ikisi').length}
            </div>
          </div>
        </div>
      </div>

      {/* History Modal */}
      {showHistory && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-gray-900 rounded-t-3xl sm:rounded-3xl w-full max-w-lg max-h-[80vh] overflow-hidden border border-white/10">
            <div className="p-4 border-b border-white/10 flex items-center justify-between sticky top-0 bg-gray-900 z-10">
              <h3 className="text-white font-bold text-lg">📜 Çekilen Kartlar</h3>
              <button
                onClick={() => setShowHistory(false)}
                className="text-gray-400 hover:text-white text-2xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="overflow-y-auto max-h-[65vh] p-4 space-y-3">
              {history.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Henüz kart çekilmedi</p>
              ) : (
                [...history].reverse().map((card, idx) => (
                  <div
                    key={`${card.id}-${idx}`}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3"
                  >
                    <div className="text-lg">{getGenderIcon(card.gender)}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${
                            categoryBgColors[card.category]
                          }`}
                        >
                          {categoryLabels[card.category]}
                        </span>
                        <span className="text-gray-600 text-[10px]">#{card.id}</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-snug">{card.task}</p>
                    </div>
                    <div className="text-xs text-gray-600">
                      {history.length - idx}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
