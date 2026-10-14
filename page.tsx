'use client'

import { useEffect, useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  HeartPulse,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
  Users,
  X,
} from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medsenior-UtyKFT5sdNaAShkzw1m81hnkTQa6qV.jpg'
const whatsappUrl = 'https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20MEDSENIOR.'

const slides = [
  { eyebrow: 'Cuidado que acolhe', title: 'Saúde para viver bem todos os dias.', text: 'Planos completos, atendimento próximo e uma rede preparada para cuidar de você.', image: '/images/medsenior-idosos-1.png' },
  { eyebrow: 'Condição especial', title: 'Seu bem-estar merece um plano sob medida.', text: 'Fale com nossa equipe e encontre a opção ideal para sua fase de vida.', image: '/images/medsenior-idosos-2.png' },
  { eyebrow: 'Mais tranquilidade', title: 'Conte com quem entende de você.', text: 'Atendimento humanizado e benefícios pensados para a melhor idade.', image: '/images/medsenior-idosos-3.png' },
]

const plans = [
  { name: 'Plano Essencial', description: 'Para quem busca praticidade e segurança no dia a dia.', features: ['Consultas em diversas especialidades', 'Atendimento de urgência', 'Rede credenciada selecionada'] },
  { name: 'Plano Conforto', description: 'Mais opções e conveniência para cuidar ainda melhor da sua saúde.', features: ['Tudo do Plano Essencial', 'Exames e diagnósticos', 'Atendimento preferencial'], featured: true },
  { name: 'Plano Completo', description: 'Uma experiência de cuidado ampla, próxima e personalizada.', features: ['Tudo do Plano Conforto', 'Rede ampliada de atendimento', 'Benefícios exclusivos'] },
]

export default function Page() {
  const [slide, setSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const current = slides[slide]

  function nextSlide() { setSlide((value) => (value + 1) % slides.length) }
  function previousSlide() { setSlide((value) => (value - 1 + slides.length) % slides.length) }

  useEffect(() => {
    const timer = window.setInterval(nextSlide, 6500)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen bg-[#f7faf7] text-[#17352d]">
      <div className="bg-[#0a6d50] px-5 py-2 text-center text-sm font-medium text-white">
        <span className="hidden sm:inline">Atendimento MEDSENIOR: </span> Orientação personalizada pelo WhatsApp
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="ml-2 underline underline-offset-4">Clique aqui</a>
      </div>

      <header className="sticky top-0 z-20 border-b border-[#dcebe3] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <a href="#inicio" aria-label="MEDSENIOR - início" className="shrink-0">
            <img src={logoUrl} alt="MEDSENIOR" className="h-24 w-auto mix-blend-multiply object-contain" />
          </a>
          <nav className="hidden items-center gap-7 text-[15px] font-semibold text-[#36584b] lg:flex" aria-label="Navegação principal">
            <a href="#inicio" className="transition-colors hover:text-[#0a7b58]">Início</a>
            <a href="#planos" className="transition-colors hover:text-[#0a7b58]">Planos</a>
            <a href="#unidades" className="transition-colors hover:text-[#0a7b58]">Unidades</a>
            <a href="#noticias" className="transition-colors hover:text-[#0a7b58]">Notícias</a>
            <a href="#contato" className="transition-colors hover:text-[#0a7b58]">Fale conosco</a>
          </nav>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-[#0a7b58] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#075f45] sm:flex">
            <MessageCircle size={18} /> Falar com um consultor
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 text-[#0a6d50] lg:hidden" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && <nav className="border-t border-[#e2eee8] bg-white px-5 py-4 lg:hidden"><div className="flex flex-col gap-4 font-semibold text-[#36584b]"><a href="#planos" onClick={() => setMenuOpen(false)}>Planos</a><a href="#unidades" onClick={() => setMenuOpen(false)}>Unidades</a><a href="#noticias" onClick={() => setMenuOpen(false)}>Notícias</a><a href="#contato" onClick={() => setMenuOpen(false)}>Fale conosco</a><a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#0a7b58]"><MessageCircle size={18} /> Falar com um consultor</a></div></nav>}
      </header>

      <section id="inicio" className="relative overflow-hidden bg-[#0b634d] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#064b3b]/95 via-[#0b634d]/80 to-transparent" />
        <img src={current.image} alt="Pessoas idosas vivendo momentos de cuidado e bem-estar" className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700" />
        <div className="relative z-10 mx-auto grid min-h-[540px] max-w-7xl items-center px-5 py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#d0ed55]">{current.eyebrow}</p>
            <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">{current.title}</h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/90">{current.text}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#planos" className="inline-flex items-center gap-2 rounded-full bg-[#c5e941] px-6 py-3.5 font-bold text-[#174a3a] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-white">Conheça nossos planos <ArrowRight size={18} /></a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"><MessageCircle size={18} /> Falar com um consultor</a>
            </div>
          </div>
        </div>
        <button onClick={previousSlide} aria-label="Banner anterior" className="absolute bottom-7 right-24 rounded-full border border-white/30 p-2 text-white hover:bg-white/10"><ChevronLeft size={22} /></button>
        <button onClick={nextSlide} aria-label="Próximo banner" className="absolute bottom-7 right-14 rounded-full border border-white/30 p-2 text-white hover:bg-white/10"><ChevronRight size={22} /></button>
        <div className="absolute bottom-9 left-5 flex gap-2 lg:left-8">{slides.map((item, index) => <button key={item.title} onClick={() => setSlide(index)} aria-label={`Ir para banner ${index + 1}`} className={`h-2 rounded-full transition-all ${index === slide ? 'w-8 bg-[#b9e53b]' : 'w-2 bg-white/50'}`} />)}</div>
      </section>

      <section className="border-b border-[#e0eee7] bg-white"><div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-3 lg:px-8"><div className="flex items-center gap-4"><ShieldCheck className="text-[#79a91b]" size={31} /><div><strong className="block text-[#17352d]">Cuidado de confiança</strong><span className="text-sm text-[#61766c]">Experiência e acolhimento</span></div></div><div className="flex items-center gap-4"><Stethoscope className="text-[#79a91b]" size={31} /><div><strong className="block text-[#17352d]">Rede credenciada</strong><span className="text-sm text-[#61766c]">Profissionais qualificados</span></div></div><div className="flex items-center gap-4"><Users className="text-[#79a91b]" size={31} /><div><strong className="block text-[#17352d]">Atendimento humano</strong><span className="text-sm text-[#61766c]">Sempre perto de você</span></div></div></div></section>

      <section id="planos" className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="mx-auto max-w-2xl text-center"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#79a91b]">Escolha com tranquilidade</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17352d] sm:text-4xl">Planos para cada momento da vida</h2><p className="mt-4 text-lg leading-7 text-[#61766c]">Opções completas para você cuidar da saúde com segurança, conforto e a atenção que merece.</p></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{plans.map((plan) => <article key={plan.name} className={`relative flex flex-col rounded-2xl border p-7 ${plan.featured ? 'border-[#0a7b58] bg-[#f0f8f2] shadow-lg shadow-[#0a7b58]/10' : 'border-[#dcebe3] bg-white'}`}>{plan.featured && <span className="absolute -top-3 left-6 rounded-full bg-[#b9e53b] px-4 py-1 text-xs font-bold uppercase tracking-wide text-[#174a3a]">Mais escolhido</span>}<h3 className="text-xl font-bold text-[#17352d]">{plan.name}</h3><p className="mt-3 min-h-14 text-[#61766c]">{plan.description}</p><div className="my-6 border-t border-[#dcebe3]" /><ul className="space-y-3 text-[15px] text-[#36584b]">{plan.features.map((feature) => <li key={feature} className="flex gap-3"><Check size={19} className="mt-0.5 shrink-0 text-[#79a91b]" />{feature}</li>)}</ul><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-[#0a7b58] px-5 py-3 font-bold text-[#0a6d50] transition hover:bg-[#0a7b58] hover:text-white">Consultar condições <ArrowRight size={17} /></a></article>)}</div></section>

      <section id="unidades" className="bg-[#eaf5ed] px-5 py-20"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:px-8"><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#79a91b]">Onde estamos</p><h2 className="mt-3 text-3xl font-bold text-[#17352d] sm:text-4xl">Cuidado perto de você</h2><p className="mt-4 max-w-lg text-lg leading-8 text-[#61766c]">Encontre uma unidade MEDSENIOR e conte com um espaço pensado para receber você com conforto e carinho.</p><div className="mt-8 flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm"><MapPin className="mt-1 text-[#0a7b58]" /><div><strong className="text-lg">Consulte nossas unidades</strong><p className="mt-1 text-[#61766c]">Veja endereços, horários e serviços disponíveis.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block font-bold text-[#0a7b58]">Encontrar unidade <ArrowRight className="ml-1 inline" size={16} /></a></div></div></div><div className="min-h-[290px] rounded-3xl bg-[#d5e8d9] p-5"><div className="flex h-full min-h-[250px] items-center justify-center rounded-2xl border border-dashed border-[#8dbb9b] bg-[#e3f1e5] text-center"><div><MapPin size={42} className="mx-auto text-[#0a7b58]" /><p className="mt-3 font-bold text-[#36584b]">Unidades MEDSENIOR</p><p className="mt-1 text-sm text-[#61766c]">Encontre o atendimento mais próximo</p></div></div></div></div></section>

      <section id="noticias" className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#79a91b]">Informação para sua saúde</p><h2 className="mt-3 text-3xl font-bold text-[#17352d] sm:text-4xl">Guias e notícias</h2></div><a href={whatsappUrl} target="_blank" rel="noreferrer" className="font-bold text-[#0a7b58]">Falar com especialista <ArrowRight className="ml-1 inline" size={17} /></a></div><div className="mt-10 grid gap-5 md:grid-cols-3"><article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#e1eee6]"><CalendarDays className="text-[#79a91b]" /><p className="mt-5 text-sm font-bold text-[#79a91b]">PREVENÇÃO</p><h3 className="mt-2 text-xl font-bold">A importância dos exames preventivos</h3><p className="mt-3 leading-7 text-[#61766c]">Descubra como o acompanhamento regular ajuda a manter mais qualidade de vida.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-5 inline-block font-bold text-[#0a7b58]">Leia mais <ArrowRight className="ml-1 inline" size={16} /></a></article><article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#e1eee6]"><HeartPulse className="text-[#79a91b]" /><p className="mt-5 text-sm font-bold text-[#79a91b]">BEM-ESTAR</p><h3 className="mt-2 text-xl font-bold">Hábitos que fazem bem ao coração</h3><p className="mt-3 leading-7 text-[#61766c]">Pequenas mudanças na rotina podem trazer grandes benefícios para a sua saúde.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-5 inline-block font-bold text-[#0a7b58]">Leia mais <ArrowRight className="ml-1 inline" size={16} /></a></article><article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#e1eee6]"><Clock3 className="text-[#79a91b]" /><p className="mt-5 text-sm font-bold text-[#79a91b]">CUIDADO</p><h3 className="mt-2 text-xl font-bold">Como ter mais tranquilidade no dia a dia</h3><p className="mt-3 leading-7 text-[#61766c]">Informação e acolhimento para você aproveitar cada fase da vida.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-5 inline-block font-bold text-[#0a7b58]">Leia mais <ArrowRight className="ml-1 inline" size={16} /></a></article></div></section>

      <section id="contato" className="bg-[#0b7255] px-5 py-16 text-white"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:px-8"><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#b9e53b]">Estamos aqui para ajudar</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Vamos conversar sobre o seu cuidado?</h2><p className="mt-4 max-w-xl text-lg leading-7 text-white/80">Nossa equipe está pronta para tirar dúvidas e apresentar as melhores opções para você e sua família.</p></div><div className="flex flex-col gap-3 sm:flex-row"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b9e53b] px-7 py-4 font-bold text-[#174a3a] transition hover:bg-white"><MessageCircle size={20} /> Falar com um consultor</a><a href="tel:+5511999999999" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-4 font-bold transition hover:bg-white/10"><Phone size={19} /> Ligar agora</a></div></div></section>

      <footer className="border-t border-[#dcebe3] bg-white px-5 pb-24 pt-12"><div className="mx-auto max-w-7xl lg:px-8"><div className="grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr] md:items-start"><div><img src={logoUrl} alt="MEDSENIOR" className="h-12 w-auto mix-blend-multiply" /><p className="mt-4 max-w-sm leading-7 text-[#61766c]">Cuidado que acolhe, atendimento que entende e saúde para viver bem todos os dias.</p></div><div><h2 className="font-bold text-[#17352d]">Central de atendimento</h2><a href="tel:+5511999999999" className="mt-3 flex items-center gap-2 text-lg font-bold text-[#0a7b58] hover:underline"><Phone size={19} /> (11) 99999-9999</a><p className="mt-2 text-sm leading-6 text-[#61766c]">Segunda a sexta, das 8h às 18h</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#e9f8ee] px-4 py-2.5 text-sm font-bold text-[#138a45] transition hover:bg-[#d9f1e1]"><MessageCircle size={17} /> Atendimento pelo WhatsApp</a></div><div><h2 className="font-bold text-[#17352d]">Acesso rápido</h2><div className="mt-3 flex flex-col gap-2 text-sm text-[#61766c]"><a href="#planos" className="hover:text-[#0a7b58]">Conheça os planos</a><a href="#unidades" className="hover:text-[#0a7b58]">Encontre uma unidade</a><a href="#contato" className="hover:text-[#0a7b58]">Fale conosco</a></div></div></div><div className="mt-10 border-t border-[#e4eee8] pt-6 text-center text-xs leading-6 text-[#71857b]">© Copyright 2024 • Samedil - Serviços de Atendimento Médico S/A • CNPJ 31.466.949/0001-05<br />Diretora Técnica Médica: Dra. Priscila Buteri Valentim Silva • CRM: 7410/ES</div></div></footer>
      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Precisa de orientação? Fale com um consultor" className="fixed bottom-5 right-5 z-30 flex items-center gap-3 rounded-full bg-[#20b958] px-4 py-3 text-white shadow-[0_10px_30px_rgba(18,116,62,0.28)] ring-4 ring-white transition hover:-translate-y-1 hover:bg-[#169c49] sm:px-5"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20"><MessageCircle size={23} /></span><span className="text-sm font-bold leading-tight">Precisa de<br className="sm:hidden" /> orientação?</span></a>
    </main>
  )
}

