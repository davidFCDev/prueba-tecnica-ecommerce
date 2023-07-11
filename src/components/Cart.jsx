import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import "./Cart.css";

export function Cart() {
  const cartCheckboxId = useId();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYvCGc5p7YkZadE_eFjhcsCmelrNfqxwL6EA&usqp=CAU"
              alt="iphone"
            />
            <div>
              <strong>iPhonte</strong> - $1400
            </div>

            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
      </aside>
    </>
  );
}
