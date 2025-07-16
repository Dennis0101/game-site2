import ProductList from '../components/ProductList'
import ChatPopup from '../components/ChatPopup'
import AnnouncementBanner from '../components/AnnouncementBanner'
import DarkModeToggle from '../components/DarkModeToggle'

export default function Home() {
  return (
    <>
      <header className="top-bar">
        <span>cheatbay.org</span>
        <DarkModeToggle />
      </header>
      <main className="p-4">
        <AnnouncementBanner />
        <ProductList />
      </main>
      <ChatPopup />
    </>
  )
}
