import Link from 'next/link'

const navigation = [
  {
    name: 'OpenAI Dashboard',
    href: 'https://platform.openai.com/account/usage',
  },
  {
    name: 'OpenAI Billing Settings',
    href: 'https://beta.openai.com/account/billing/limits',
  },
]

export default function Footer() {
  return (
    <footer className="mx-auto container py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div className="flex justify-center space-x-6 md:order-2">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
            {item.name}
          </Link>
        ))}
      </div>
      <div className="mt-8 md:order-1 md:mt-0">
        <p className="text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}