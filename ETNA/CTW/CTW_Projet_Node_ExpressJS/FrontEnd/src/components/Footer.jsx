import { Link } from "react-router-dom";

import facebook from '../public/cart.png';
import instagram from '../public/instagram.png';
import youtube from '../public/youtube.png';
import pinterest from '../public/pinterest.png';
import x from '../public/x.png';

import discover from '../public/discover.png';
import skrill from '../public/skrill.png';
import paypal from '../public/paypal.png';
import mastercard from '../public/mastercard.png';
import visa from '../public/visa.png';



const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">ECOM</div>
          </Link>
          <p>
          7 Rue Maurice Grandcoing, 94200 Ivry-sur-Seine
          </p>
          <span className="font-semibold ">august_a@etna-alternance.io</span>
          <span className="font-semibold">+12 3 45 67 89 00</span>
          <div className="flex gap-6">
            <img src={facebook} alt="" width={16} height={16} />
            <img src={instagram} alt="" width={16} height={16} />
            <img src={youtube} alt="" width={16} height={16} />
            <img src={pinterest} alt="" width={16} height={16} />
            <img src={x} alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">ENTREPRISE</h1>
            <div className="flex flex-col gap-6 items-center">
              <Link href="">A propos de nous</Link>
              <Link href="">Carrieres</Link>
              <Link href="">Blog</Link>
              <Link href="">Nous contacter</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg justify-center">BOUTIQUE</h1>
            <div className="flex flex-col gap-6 items-center">
              <Link href="">Homme</Link>
              <Link href="">Femme</Link>
              <Link href="">Sneakers</Link>
              <Link href="">Chaussures</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg justify-center">AIDE</h1>
            <div className="flex flex-col gap-6 items-center">
              <Link href="">Service Client</Link>
              <Link href="">Mon compte</Link>
              <Link href="">Trouver un magasin</Link>
              <Link href="">Mentions légales</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg ">S'INSCRIRE</h1>
            <p className="items-center">
            Soyez les premiers à recevoir les dernières nouvelles sur les tendances, les promotions et bien plus encore !
            </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Adresse Mail"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white">OK</button>
          </div>
          <span className="font-semibold">Paiements sécurisés</span>
          <div className="flex justify-between">
            {/* <img src={discover} alt="" width={40} height={20} /> */}
            <img src={skrill} alt="" width={40} height={20} />
            <img src={paypal} alt="" width={40} height={20} />
            <img src={mastercard} alt="" width={40} height={20} />
            <img src={visa} alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 ECOM Boutique</div>
        <div className="flex flex-col gap-8 md:flex-row">
        </div>
      </div>
    </div>
  );
};

export default Footer;