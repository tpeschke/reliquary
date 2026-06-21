import './Page.css'

export default function Page({ children }) {
    return (
        <div className="page-shell">
            {children}
        </div>
    )
}