/**
 * kit/render/flows.mjs — akış şeritleri (P4).
 *
 * Refero'nun asıl değeri ekran değil **akış**tır (kaydolma, ödeme, davet…). Katalog 31 tek kare
 * gösteriyordu; burada 3 akış × 3 adım tek şeritte render edilir.
 *
 * Çıktı: kit/.shots-cache/<dir>/flows/<id>.png (üretilen; repoda tutulmaz)
 * Kural: yalnız mevcut sınıflar + var(--…); metin P1 paketinden.
 */

const dot = (i, n) => `<span class="f-dots">${Array.from({ length: n }, (_, k) => `<i class="${k === i ? 'on' : ''}"></i>`).join('')}</span>`;

export const FLOWS = [
  {
    id: 'onboarding',
    label: 'İlk kurulum',
    width: 1560,
    height: 430,
    steps: [
      {
        title: 'Amaç',
        body: `<div class="f-opts"><label class="f-opt on"><b>__COPY_TILE1__</b><span>Hızlı başlangıç</span></label><label class="f-opt"><b>__COPY_TILE2__</b><span>Ekip ile</span></label><label class="f-opt"><b>__COPY_TILE3__</b><span>Sonra karar ver</span></label></div>`,
      },
      {
        title: 'Ekip',
        body: `<div class="f-field"><span class="f-label">Ekip adı</span><div class="f-input">__COPY_LOGO1__</div></div><div class="f-field"><span class="f-label">Büyüklük</span><div class="f-chips"><span class="chip">1–5</span><span class="chip on">6–20</span><span class="chip">21+</span></div></div>`,
      },
      {
        title: 'Davet',
        body: `<div class="f-field"><span class="f-label">E-posta</span><div class="f-input">ada@__COPY_LOGO2__.com</div></div><div class="f-note">__COPY_PROOF1__ · sonra da davet edebilirsin</div><a class="btn" href="#">__COPY_CTA1__</a>`,
      },
    ],
  },
  {
    id: 'checkout',
    label: 'Ödeme',
    width: 1560,
    height: 470,
    steps: [
      {
        title: 'Sepet',
        body: `<div class="f-row"><span>__COPY_TILE1__</span><b>₺480</b></div><div class="f-row"><span>__COPY_TILE2__</span><b>₺120</b></div><div class="f-row total"><span>Toplam</span><b>₺600</b></div><div class="f-note">__COPY_PROOF2__</div>`,
      },
      {
        title: 'Ödeme',
        body: `<div class="f-field"><span class="f-label">Kart</span><div class="f-input">•••• 4242</div></div><div class="f-2col"><div class="f-field"><span class="f-label">SKT</span><div class="f-input">04/29</div></div><div class="f-field"><span class="f-label">CVV</span><div class="f-input">•••</div></div></div><div class="f-note">3D Secure ile doğrulanır</div>`,
      },
      {
        title: 'Onay',
        body: `<div class="f-ok"><span class="f-check">✓</span><div><b>Ödeme alındı</b><p class="f-note">__COPY_PROOF3__ · fatura e-postaya gider.</p></div></div><a class="btn ghost" href="#">Makbuzu indir</a>`,
      },
    ],
  },
  {
    id: 'invite',
    label: 'Davet',
    width: 1560,
    height: 400,
    steps: [
      { title: 'Rol', body: `<div class="f-opts"><label class="f-opt on"><b>Görüntüle</b><span>Sadece okur</span></label><label class="f-opt"><b>Düzenle</b><span>İçerik üretir</span></label><label class="f-opt"><b>Yönet</b><span>Ekip + fatura</span></label></div>` },
      { title: 'Mesaj', body: `<div class="f-field"><span class="f-label">Not (opsiyonel)</span><div class="f-input tall">__COPY_LEDE__</div></div>` },
      { title: 'Gönder', body: `<div class="f-field"><span class="f-label">Alıcılar</span><div class="f-chips"><span class="chip">ada@__COPY_LOGO1__.com</span><span class="chip">kerem@__COPY_LOGO3__.com</span></div></div><a class="btn" href="#">Davet gönder</a><div class="f-note">Bağlantı 7 gün geçerli</div>` },
    ],
  },
];
