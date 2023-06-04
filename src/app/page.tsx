import AddNewSpending from './AddNewSpending/page'
import classes from './page.module.css'

export default function Home() {
  return (
    <div className={classes.main}>
      <AddNewSpending />
    </div>
  )
}
