import styles from './Cards.module.scss'
import  type { CardsList } from './cardsList'

type Props = {
  card : CardsList
}

const Cards = ({card}: Props) => {
    const { icon: Icon, header, totalussage, profitOrLoss, profitOrLossIcon: ProfitIcon, isProfit } = card;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.title}>
               <Icon  />
               {header}
        </div>
        <div className={styles.usersData}>
            <div className={styles.newUsers}>
                {totalussage}
            </div>
            <div className={styles.profit_loss}>
                <div className={`${styles.data} ${!isProfit ? styles.dataRed : ' '}`}>
                    {profitOrLoss}
                <ProfitIcon />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Cards
