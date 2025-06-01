import type { IconType } from "react-icons";
import { IoEyeSharp } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdPerson } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { GoArrowDownRight } from "react-icons/go";


 export interface CardsList {
    icon: IconType,
    header : string,
    totalussage : string,
    profitOrLoss : string, 
    profitOrLossIcon : IconType,
    isProfit : boolean
}

export const cardsList : CardsList[] = [
    {icon : IoEyeSharp , header : 'Pageviews', totalussage : '50.8K', profitOrLoss: '28.4%', profitOrLossIcon:GoArrowUpRight, isProfit : true  },

    {icon : IoMdPerson , header : 'Monthly users', totalussage : '23.6K', profitOrLoss: '12.6%', profitOrLossIcon:GoArrowDownRight, isProfit : false  },

    {icon : IoEyeSharp , header : 'New sign ups', totalussage : '756', profitOrLoss: '3.1%', profitOrLossIcon:GoArrowUpRight, isProfit : true  },

    {icon : FaCirclePlus , header : 'Subscriptions', totalussage : '2.3K', profitOrLoss: '11.3%', profitOrLossIcon:GoArrowUpRight, isProfit : true  }
]