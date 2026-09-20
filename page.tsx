'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
  HelpCircle,
  Building2,
  Stethoscope,
  BarChart3,
  DollarSign,
  FileSpreadsheet,
  Lock,
  Play,
  MessageCircle,
  Sparkles,
  PieChart,
  LineChart,
} from 'lucide-react';

import GlowButton from '@/components/ui/GlowButton';
import GlassCard from '@/components/ui/GlassCard';
import SectionReveal from '@/components/ui/SectionReveal';
import TextReveal from '@/components/ui/TextReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import AccordionFaq from '@/components/ui/AccordionFaq';

export default function Home() {
  const faqHome = [
    {
      question: 'O BPO Financeiro vai ter acesso ao meu dinheiro no banco?',
      answer:
        'Não. Nós apenas preparamos e agendamos os pagamentos no seu sistema bancário. A aprovação final e o uso da senha/token continuam sendo exclusivamente seus. Você delega o operacional e mantém a alçada do cofre.',
    },
    {
      question: 'O BPO substitui o meu contador?',
      answer:
        'Não. O contador cuida das obrigações fiscais, apuração de impostos e balanço anual. Nós cuidamos da operação diária: contas a pagar, receber, fluxo de caixa e gestão. Trabalhamos em total sintonia alimentando sua contabilidade.',
    },
    {
      question: 'É mais caro do que contratar um funcionário interno?',
      answer:
        'É consideravelmente mais econômico. Sem encargos trabalhistas, 13º, férias, custos de recrutamento ou risco de passivos. Você contrata uma equipe especialista pronta por uma fração do custo de um CLT.',
    },
    {
      question: 'Quanto tempo demora para implantar o serviço?',
      answer:
        'O processo de onboarding e integração leva em média de 15 a 30 dias, dependendo do volume e do estado atual da organização financeira da sua empresa.',
    },
  ];

  const pricingPlans = [
    {
      name: 'Essencial',
      badge: 'Para Pequenas Operações',
      desc: 'Organização diária de caixa e faturamento inicial para clínicas e autônomos.',
      features: [
        'Contas a Pagar e Receber diário',
        'Conciliação bancária simples',
        'Emissão de até 30 NFs/mês',
        'Relatório mensal de caixa',
        'Suporte por e-mail e ticket',
      ],
      cta: 'Solicitar Proposta',
      highlighted: false,
    },
    {
      name: 'Profissional',
      badge: 'Mais Escolhido — Alta Performance',
      desc: 'Departamento financeiro completo como CFO terceirizado para seu negócio.',
      features: [
        'Tudo do Plano Essencial',
        'Gestão ativa de cobrança de inadimplentes',
        'Conciliação de cartões e convênios médicos',
        'Fluxo de Caixa Projetado (30/60/90 dias)',
        'DRE Gerencial Simplificada mensal',
        'Reunião mensal de alinhamento com especialista',
        'Atendimento prioritário via WhatsApp dedicado',
      ],
      cta: 'Quero este Plano',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      badge: 'Escala & Multi-unidades',
      desc: 'Solução sob medida para redes de clínicas e empresas com alto volume.',
      features: [
        'Tudo do Plano Profissional',
        'Gestão multi-CNPJ e filiais',
        'Engenharia financeira corporativa customizada',
        'Relatórios de lucratividade por unidade/médico',
        'Suporte a relacionamentos bancários e alavancagem',
        'Gerente de conta exclusivo',
      ],
      cta: 'Falar com Consultor',
      highlighted: false,
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* ---------------------------------------------------- */}
      {/* SEÇÃO 1: HERO */}
      {/* ---------------------------------------------------- */}
      <section className="relative min-h-[85vh] flex items-center pt-8 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Lado Esquerdo: Conteúdo textual */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <SectionReveal delay={0.1}>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/20 backdrop-blur-md">
                  <Sparkles className="w-4 h-4 text-white animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                    BPO Financeiro para clínicas e empresas de serviços
                  </span>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                  Você foca em cuidar do seu negócio.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 glow-text-white">
                    Nós assumimos 100% do seu financeiro.
                  </span>
                </h1>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
                  Tenha um departamento financeiro terceirizado e especializado em clínicas e empresas de serviços. Acabe com a mistura de contas, zere a inadimplência e tenha previsibilidade de caixa sem custos de contratação CLT.
                </p>
              </SectionReveal>

              <SectionReveal delay={0.4}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <GlowButton href="/contato" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                    QUERO UM DIAGNÓSTICO GRATUITO
                  </GlowButton>

                  <GlowButton href="/servicos" variant="outline" size="lg">
                    CONHECER NOSSOS SERVIÇOS
                  </GlowButton>
                </div>
              </SectionReveal>

              {/* Botão sutil de Vídeo Explicativo / Área do Cliente */}
              <SectionReveal delay={0.5}>
                <div className="pt-4 flex items-center gap-4">
                  <a
                    href="https://wa.me/5511966046663?text=Ol%C3%A1%21%20Quero%20receber%20o%20v%C3%ADdeo%20demonstrativo%20da%20plataforma%20CX."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-white/40 text-xs font-semibold text-slate-300 hover:text-white transition-all group"
                  >
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white text-white group-hover:text-slate-950 transition-all">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </div>
                    <span>Assistir Vídeo Demonstrativo da Operação</span>
                  </a>
                </div>
              </SectionReveal>
            </div>

            {/* Lado Direito: Visual Dashboard Interactive Glass Mockup */}
            <div className="lg:col-span-5 relative">
              <SectionReveal delay={0.3} direction="left">
                <div className="relative">
                  {/* Backdrop Glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-white/10 blur-3xl rounded-3xl" />

                  {/* Glass Dashboard Container */}
                  <GlassCard className="relative z-10 space-y-6 border-white/20 p-6 sm:p-8">
                    {/* Header Mockup */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                          <BarChart3 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-400">Painel do Cliente</div>
                          <div className="text-sm font-bold text-white">CX Financeiro Live</div>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Operação Ativa
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                        <span className="text-[11px] text-slate-400">Fluxo Projetado (90d)</span>
                        <div className="text-lg font-bold text-white">
                          R$ <AnimatedCounter to={284500} />
                        </div>
                        <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" /> +18.4% este mês
                        </span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                        <span className="text-[11px] text-slate-400">Taxa Inadimplência</span>
                        <div className="text-lg font-bold text-white">
                          <AnimatedCounter to={0} suffix=".8%" />
                        </div>
                        <span className="text-[10px] text-slate-300">Zeradinha via Cobrança</span>
                      </div>
                    </div>

                    {/* Simulação gráfica simplificada */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                      <div className="flex justify-between items-center text-xs text-slate-300 font-medium">
                        <span>Previsão de Caixa Semanal</span>
                        <span className="text-slate-400">Conciliado</span>
                      </div>
                      <div className="h-20 flex items-end justify-between gap-2 pt-2">
                        {[40, 65, 55, 80, 70, 95, 85].map((val, idx) => (
                          <div key={idx} className="w-full bg-white/10 rounded-t-md relative group flex flex-col justify-end">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${val}%` }}
                              transition={{ duration: 1, delay: idx * 0.1 }}
                              className="w-full bg-gradient-to-t from-white/20 to-white/90 rounded-t-md group-hover:bg-white"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Badge de Aprovação Bancária Segura */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-white/15 text-xs text-slate-300">
                      <Lock className="w-4 h-4 text-white shrink-0" />
                      <span>Seu dinheiro protegido: aprovação final 100% no seu token bancário.</span>
                    </div>
                  </GlassCard>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SEÇÃO 2: PROBLEMA (A dor latente) */}
      {/* ---------------------------------------------------- */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Você reconhece estes desafios no seu dia a dia?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Muitos empresários e médicos vivem na armadilha do faturamento alto sem lucratividade real.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SectionReveal delay={0.1}>
            <GlassCard className="h-full space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">O Dinheiro Sume</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                O faturamento entra, mas no fim do mês o dinheiro parece evaporar e você não sabe exatamente para onde foram os lucros.
              </p>
            </GlassCard>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <GlassCard className="h-full space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Perda de Tempo Valioso</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Você perde horas preciosas da sua semana emitindo notas, pagando boletos e tentando cobrar clientes inadimplentes.
              </p>
            </GlassCard>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <GlassCard className="h-full space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Mistura de Contas</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Mistura a conta da empresa com a conta pessoal e vive na ansiedade constante sobre o pagamento da folha ou impostos.
              </p>
            </GlassCard>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.4} className="mt-12 text-center">
          <div className="inline-block p-6 rounded-2xl bg-white/5 border border-white/15 max-w-3xl">
            <p className="text-base sm:text-lg font-semibold text-white">
              "Se a sua empresa cresceu, mas o financeiro continuou improvisado, você está perdendo margem de lucro todos os dias."
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SEÇÃO 3: SOLUÇÃO (O Mecanismo) */}
      {/* ---------------------------------------------------- */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard className="p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white">
                <span>O Mecanismo CX</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white">
                O que é e como atua o nosso Departamento Financeiro Terceirizado?
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Nós não somos apenas um escritório que emite guias. Nós entramos na sua operação como o seu CFO e braço direito financeiro.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-1">
                  <h4 className="text-xs uppercase font-bold text-slate-400">O que você deixa de fazer</h4>
                  <p className="text-sm text-slate-200">
                    Esqueça a digitação de notas, o estresse com cobranças e o controle em planilhas que nunca batem.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/10 border border-white/30 space-y-1 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <h4 className="text-xs uppercase font-bold text-white">O que você passa a ter</h4>
                  <p className="text-sm text-white">
                    Rotina 100% organizada, contas a pagar em dia, fluxo de caixa previsível e relatórios gerenciais claros para decidir com segurança.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <LineChart className="w-8 h-8 text-white" />
                <h4 className="font-bold text-white text-base">Fluxo Projetado</h4>
                <p className="text-xs text-slate-400">Visão clara de entradas e saídas futuras.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <PieChart className="w-8 h-8 text-white" />
                <h4 className="font-bold text-white text-base">Taxa de Inadimplência</h4>
                <p className="text-xs text-slate-400">Controle rigoroso de quem está em atraso.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <BarChart3 className="w-8 h-8 text-white" />
                <h4 className="font-bold text-white text-base">DRE Simplificada</h4>
                <p className="text-xs text-slate-400">Lucro real da operação, sem ruído contábil.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <DollarSign className="w-8 h-8 text-white" />
                <h4 className="font-bold text-white text-base">Capital de Giro</h4>
                <p className="text-xs text-slate-400">Fôlego e previsibilidade para seu negócio.</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SEÇÃO 4: PRINCIPAIS SERVIÇOS */}
      {/* ---------------------------------------------------- */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            O que tiramos das suas costas
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Dividimos nossa operação em pilares estratégicos de alta eficiência.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SectionReveal delay={0.1}>
            <GlassCard className="h-full flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Operação de Contas a Pagar e Receber</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Gestão completa de pagamentos de fornecedores e recebimentos de clientes.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-white" /> Zero multas por atraso
                </span>
              </div>
            </GlassCard>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <GlassCard className="h-full flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Faturamento e Cobrança Ativa</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Emissão correta de notas fiscais e controle humanizado porém firme de inadimplência.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-white" /> Redução drástica de calotes
                </span>
              </div>
            </GlassCard>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <GlassCard className="h-full flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Conciliação e Fluxo de Caixa</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Conferência diária de extratos bancários e projeção de caixa para curto e médio prazo.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-white" /> Previsibilidade de 90 dias
                </span>
              </div>
            </GlassCard>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.4} className="mt-12 text-center">
          <GlowButton href="/servicos" variant="secondary" icon={<ArrowRight className="w-4 h-4" />}>
            Ver Detalhes Completos dos Serviços
          </GlowButton>
        </SectionReveal>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SEÇÃO NOVO ELEMENTO: 3 PLANOS (VISA / Acesso / Vídeo) */}
      {/* ---------------------------------------------------- */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white">
            <span>Modelos de Atendimento</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Planos sob medida para o seu momento
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Escolha o escopo de departamento financeiro ideal para sua empresa.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, idx) => (
            <SectionReveal key={idx} delay={idx * 0.15}>
              <GlassCard
                className={`h-full flex flex-col justify-between space-y-8 ${
                  plan.highlighted
                    ? 'border-white/50 shadow-[0_0_30px_rgba(255,255,255,0.15)] bg-slate-900/90'
                    : ''
                }`}
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {plan.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{plan.desc}</p>
                  </div>

                  <ul className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-300">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 pt-6 border-t border-white/10">
                  <GlowButton
                    href="/contato"
                    variant={plan.highlighted ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    {plan.cta}
                  </GlowButton>
                </div>
              </GlassCard>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SEÇÃO 6: COMO FUNCIONA (Os 4 passos) */}
      {/* ---------------------------------------------------- */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Como levamos sua empresa do caos à previsibilidade em 4 passos
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Processo de onboarding fluido e sem travamentos na sua rotina.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Diagnóstico Inicial',
              desc: 'Analisamos o seu momento atual, gargalos e sistemas utilizados.',
            },
            {
              step: '02',
              title: 'Organização e Integração',
              desc: 'Alinhamos acessos bancários seguros e estruturamos as ferramentas.',
            },
            {
              step: '03',
              title: 'Início da Operação',
              desc: 'Nossa equipe assume contas a pagar, receber, faturamento e cobrança.',
            },
            {
              step: '04',
              title: 'Acompanhamento Estratégico',
              desc: 'Você recebe relatórios periódicos claros e reuniões de alinhamento.',
            },
          ].map((item, idx) => (
            <SectionReveal key={idx} delay={idx * 0.1}>
              <GlassCard className="h-full space-y-4">
                <span className="text-3xl font-black text-white/40">{item.step}</span>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </GlassCard>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SEÇÃO 7: PARA QUEM É (Identificação de Nicho) */}
      {/* ---------------------------------------------------- */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Para quem foi desenhado o BPO Financeiro da CX?
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SectionReveal delay={0.1}>
            <GlassCard className="h-full space-y-6 border-white/30">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Clínicas Médicas, Odontológicas e Estética
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Profissionais da saúde e estética que faturam bem, mas sofrem com repasses de convênios, controle de pacotes parcelados e inadimplência.
              </p>
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white" /> Conciliação exata de repasses de convênios
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white" /> Controle de parcelamento de procedimentos
                </div>
              </div>
            </GlassCard>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <GlassCard className="h-full space-y-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Empresas de Serviços e Facilities
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Negócios com alto volume de movimentações, folha de pagamento expressiva e necessidade de rigor absoluto em capital de giro.
              </p>
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white" /> Previsibilidade matemática de caixa
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white" /> Blindagem contra furos no capital de giro
                </div>
              </div>
            </GlassCard>
          </SectionReveal>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SEÇÃO 11: FAQ */}
      {/* ---------------------------------------------------- */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center space-y-4 mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Tire suas dúvidas sobre o BPO Financeiro
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Transparência total antes de tomar sua decisão.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <AccordionFaq items={faqHome} />
        </SectionReveal>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SEÇÃO 12: CTA FINAL */}
      {/* ---------------------------------------------------- */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <GlassCard className="p-8 sm:p-16 text-center space-y-8 border-white/40 bg-gradient-to-b from-slate-900/90 to-slate-950">
            <h2 className="text-3xl sm:text-5xl font-bold text-white max-w-3xl mx-auto">
              Cansado de apagar incêndios e perder o controle do seu caixa?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
              Converse com nossa equipe de especialistas e descubra exatamente como podemos assumir a sua rotina financeira em poucos dias.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <GlowButton href="/contato" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                QUERO AGENDAR UM DIAGNÓSTICO FINANCEIRO
              </GlowButton>
              <GlowButton
                href="https://wa.me/5511966046663?text=Ol%C3%A1%21%20Quero%20agendar%20um%20diagn%C3%B3stico%20financeiro."
                variant="outline"
                size="lg"
                icon={<MessageCircle className="w-5 h-5" />}
              >
                Chamar no WhatsApp
              </GlowButton>
            </div>
          </GlassCard>
        </SectionReveal>
      </section>
    </div>
  );
}
