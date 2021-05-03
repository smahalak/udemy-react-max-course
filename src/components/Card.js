import './Card.css'
const Card = (props) => {

    const classes = 'card ' + props.className;
    // this is needed so that the classes are also applied on the ExpenseItem.js
    // so it would have a class of card and expense-item__description because of the space after 'card '

    return (
        <div className={classes}>

            {props.children}
            {/* children is reserved name. what will now be available is the content between <card><card/>  on Expense Item
            this needs to be done because we are wrapping a card container around the ExpenseDate component so that we can apply card css */}
        </div>
    )
}



export default Card
