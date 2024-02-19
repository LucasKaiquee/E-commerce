import { BsCart3 } from "react-icons/bs"

import "./header.styles.css"

export default function Header() {
    return (
        <div className="header-container">
            <h2 className="header-title">LK STORE</h2>

            <div className="header-items">
                <div className="header-item">Explorar</div>
                <div className="header-item">Login</div>
                <div className="header-item">Criar Conta</div>
                <div className="header-item">
                    <BsCart3 size={25} />
                    <p className="ml-1">5</p>
                </div>
            </div>
        </div>
    )
} 