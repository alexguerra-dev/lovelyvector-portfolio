import './globals.css'

export const metadata = {
    title: 'lovelyVector - Portfolio',
    description: 'lovelyVector Portfolio',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
