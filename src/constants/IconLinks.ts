import { CiShoppingCart } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

export const IconNavLinks = [
    {
        id: 1,
        icon: CiShoppingCart,
        text: 'Koszyk',
        href: '/Koszyk',
        showQuantity: true
    },
    {
        id: 2,
        icon: CiPhone,
        text: 'Kontakt',
        href: '/Kontakt',
        showQuantity: false
    },
    {
        id: 3,
        icon: CiUser,
        text: 'Profil',
        href: '/Profil',
        showQuantity: false
    },
    {
        id: 4,
        icon: CiHeart,
        text: 'Ulubione',
        href: '/Ulubione',
        showQuantity: true
    }
];