import Image from "next/image"
import Link from "next/link"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function InternshipsPage() {
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

      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-2xl font-bold">インターンシップ一覧</h1>

          {/* Search and Filter */}
          <div className="mb-8 grid gap-6 md:grid-cols-[300px_1fr]">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="mb-6">
                <h3 className="mb-3 flex items-center gap-2 font-bold">
                  <Filter className="h-4 w-4" />
                  絞り込み検索
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label className="mb-2 block text-sm font-medium">エリア</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="エリアを選択" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tokyo">東京</SelectItem>
                        <SelectItem value="osaka">大阪</SelectItem>
                        <SelectItem value="remote">リモート</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="mb-2 block text-sm font-medium">職種</Label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox id="ui-ux" />
                        <Label htmlFor="ui-ux" className="text-sm font-normal">
                          UI/UXデザイン
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="graphic" />
                        <Label htmlFor="graphic" className="text-sm font-normal">
                          グラフィックデザイン
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="web" />
                        <Label htmlFor="web" className="text-sm font-normal">
                          Webデザイン
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="illustration" />
                        <Label htmlFor="illustration" className="text-sm font-normal">
                          イラストレーション
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="mb-2 block text-sm font-medium">勤務日数</Label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox id="days-1" />
                        <Label htmlFor="days-1" className="text-sm font-normal">
                          週1日〜
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="days-2" />
                        <Label htmlFor="days-2" className="text-sm font-normal">
                          週2日〜
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="days-3" />
                        <Label htmlFor="days-3" className="text-sm font-normal">
                          週3日〜
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="mb-2 block text-sm font-medium">特徴</Label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox id="paid" />
                        <Label htmlFor="paid" className="text-sm font-normal">
                          有給インターン
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="remote" />
                        <Label htmlFor="remote" className="text-sm font-normal">
                          リモート可
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="transportation" />
                        <Label htmlFor="transportation" className="text-sm font-normal">
                          交通費支給
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="long-term" />
                        <Label htmlFor="long-term" className="text-sm font-normal">
                          長期歓迎
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="w-full">条件を適用する</Button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm">
                <Input type="text" placeholder="キーワードを入力" className="flex-1" />
                <Button>
                  <Search className="mr-2 h-4 w-4" />
                  検索
                </Button>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
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

                {/* Internship Card 4 */}
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
                    <div className="mb-2 text-sm text-gray-500">株式会社イラストレーションワークス</div>
                    <h3 className="mb-3 text-lg font-bold text-teal-700">
                      商業イラストの世界へ！実践的なイラストレーションインターン
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                      商業イラストの制作現場で、実際の案件に携わりながらプロのイラストレーターから技術を学べます。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-teal-100 px-3 py-1 text-xs text-teal-800">
                        イラストレーション
                      </span>
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800">週1日〜</span>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">時給: 1,000円〜 交通費支給あり リモート可</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button variant="outline" className="rounded-full">
                  もっと見る
                </Button>
              </div>
            </div>
          </div>
        </div>
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
