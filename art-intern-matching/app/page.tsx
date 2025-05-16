import Image from "next/image"
import Link from "next/link"
import { Search, MapPin, Briefcase, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Image src="/placeholder.svg?height=32&width=32" alt="ArtIntern Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold text-teal-600">ArtIntern</span>
            <span className="text-xs text-gray-500">デザインインターン</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/companies" className="text-sm text-gray-600 hover:text-teal-600">
              インターンシップ採用を検討している企業様はこちら
            </Link>
            <Button className="rounded-full bg-rose-500 hover:bg-rose-600">会員登録</Button>
            <Button variant="outline" className="rounded-full">
              ログイン
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gray-900 py-24 text-center text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=500&width=1500"
              alt="Students working on design projects"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="inline-block rounded-full bg-white px-4 py-1 text-sm font-bold text-rose-500">業界初!</div>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              就活が圧倒的に有利になる
              <br />
              新しい美大生向けインターン
            </h1>
            <div className="mx-auto mt-12 flex max-w-3xl justify-center gap-4">
              <Button className="flex items-center gap-2 rounded-full bg-white px-6 py-6 text-gray-800 hover:bg-gray-100">
                <MapPin className="h-5 w-5 text-rose-500" />
                <span className="text-base">エリア</span>
              </Button>
              <Button className="flex items-center gap-2 rounded-full bg-white px-6 py-6 text-gray-800 hover:bg-gray-100">
                <Briefcase className="h-5 w-5 text-rose-500" />
                <span className="text-base">職種</span>
              </Button>
              <Button className="flex items-center gap-2 rounded-full bg-white px-6 py-6 text-gray-800 hover:bg-gray-100">
                <Building className="h-5 w-5 text-rose-500" />
                <span className="text-base">業種</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="mx-auto flex max-w-3xl items-center rounded-full border bg-white px-4 py-2 shadow-sm">
              <Input
                type="text"
                placeholder="キーワードを入力"
                className="flex-1 border-0 bg-transparent text-base focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button size="icon" className="rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Internship Listings */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex items-center justify-between rounded-lg bg-gray-700 px-6 py-3 text-white">
              <h2 className="text-lg font-bold">新着のインターン求人</h2>
              <Link href="/internships" className="flex items-center gap-1 text-sm hover:underline">
                もっと見る
                <span>→</span>
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Internship Card 1 */}
              <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="インターンシップの様子"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2 text-sm text-gray-500">株式会社デザインスタジオ</div>
                  <h3 className="mb-3 text-lg font-bold text-teal-700">
                    自分のアイデアを形にできる！UI/UXデザインインターン
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                    実際のプロジェクトに参加し、プロのデザイナーと一緒に働きながらスキルを磨けるインターンシップです。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-teal-100 px-3 py-1 text-xs text-teal-800">UI/UXデザイン</span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800">週2日〜</span>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">時給: 1,200円〜 交通費支給あり リモート可</div>
                </div>
              </div>

              {/* Internship Card 2 */}
              <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="インターンシップの様子"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2 text-sm text-gray-500">株式会社クリエイティブラボ</div>
                  <h3 className="mb-3 text-lg font-bold text-teal-700">
                    広告デザインの現場を体験！実践的なグラフィックデザインインターン
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                    広告制作の現場で実際のクライアントワークに携わりながら、プロのデザイナーから直接指導が受けられます。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-teal-100 px-3 py-1 text-xs text-teal-800">
                      グラフィックデザイン
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800">週3日〜</span>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">時給: 1,100円〜 交通費支給あり 長期歓迎</div>
                </div>
              </div>

              {/* Internship Card 3 */}
              <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="インターンシップの様子"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2 text-sm text-gray-500">株式会社アートディレクション</div>
                  <h3 className="mb-3 text-lg font-bold text-teal-700">
                    ブランディングの最前線！企業イメージを創るデザインインターン
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                    企業ブランディングの現場で、ロゴやブランドアイデンティティの制作に携わるチャンスです。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-teal-100 px-3 py-1 text-xs text-teal-800">ブランディング</span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800">週2日〜</span>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">時給: 1,300円〜 交通費支給あり 社員登用あり</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Featured Event */}
              <div className="overflow-hidden rounded-lg bg-rose-50">
                <div className="relative">
                  <div className="absolute left-4 top-4 rounded-full bg-rose-500 px-3 py-1 text-xs font-bold text-white">
                    完全無料！
                  </div>
                  <div className="relative h-64 w-full">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="有給インターン相談会"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-gray-800">有給インターン相談会</h3>
                  <p className="mb-4 text-gray-600">
                    大学1年〜4年（卒業年度）まで参加可能！美大生に特化した相談会です！
                  </p>
                  <Button className="rounded-full bg-rose-500 hover:bg-rose-600">詳細を見る</Button>
                </div>
              </div>

              {/* Featured Internships */}
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-6 text-xl font-bold text-gray-800">注目のインターン体験談</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt="インターン体験者"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal-700">社長や幹部についても相談できるインターン環境</h4>
                      <div className="mt-1 text-sm text-gray-500">
                        <div>日本大学 大学2年生</div>
                        <div>ゆうた</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt="インターン体験者"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal-700">
                        実務を通して論理的思考力、チームワーク力が身につきました
                      </h4>
                      <div className="mt-1 text-sm text-gray-500">
                        <div>多摩美術大学 大学3年生</div>
                        <div>あやか</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href="/experiences"
                    className="text-sm font-medium text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    もっと体験談を見る →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-8 w-8">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt="ArtIntern Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-teal-600">ArtIntern</span>
              </Link>
              <p className="mt-4 text-sm text-gray-600">
                美大生と企業をつなぐ、デザインインターンシップマッチングサービス
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-bold">学生の方へ</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-teal-600 hover:underline">
                    インターンシップを探す
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-600 hover:underline">
                    会員登録
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-600 hover:underline">
                    体験談を読む
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold">企業の方へ</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-teal-600 hover:underline">
                    採用担当者様向け情報
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-600 hover:underline">
                    掲載のお申し込み
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-600 hover:underline">
                    ご利用料金
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold">ArtInternについて</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-teal-600 hover:underline">
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-600 hover:underline">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-600 hover:underline">
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ArtIntern All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
