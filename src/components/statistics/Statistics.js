// import React, { Component }from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

function Statistics({good,neutral,bad,total,positivePercentage}) {
  return (
    <ul className={style.statisticsList}>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total}</li>
        <li>Positive feedback:{positivePercentage}%</li>      
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad:  PropTypes.number.isRequired,
    total:  PropTypes.number.isRequired,
    positivePercentage:  PropTypes.number.isRequired,
};

export default  Statistics;

// class Statistics extends Component{
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     };

//     handleIncrementGood = () => {
//         this.setState(prevState => {
//             return {
//                 good: prevState.good + 1,
//             };
//         });
//     };

//     handleIncrementNeutral = () => {
//         this.setState(prevState => {
//             return {
//                 neutral: prevState.neutral + 1,
//             };
//         });
//     };

//     handleIncrementBad = () => {
//         this.setState(prevState => {
//             return {
//                 bad: prevState.bad + 1,
//             };
//         });
//     };

//     countTotalFeedback = () => {
        
//     };
//     countPositiveFeedbackPercentage = () => {
        
//     };

//     render() {
//         const total = this.state.good + this.state.neutral + this.state.bad;
//         const percentageOfPositiveFeedback = this.state.good * 100 / total;
//         return (
//             <div>
//                 <ul className={style.buttonList}>
//                     <li ><button type="button" onClick={this.handleIncrementGood} className={style.button}>Good</button></li>
//                     <li ><button type="button" onClick={this.handleIncrementNeutral} className={style.button}>Neutral</button></li>
//                     <li ><button type="button" onClick={this.handleIncrementBad} className={style.button}>Bad</button></li>
//                 </ul>
//                 <ul className={style.statisticsList}>
//                     <li>Good:{this.state.good}</li>
//                     <li>Neutral:{this.state.neutral}</li>
//                     <li>Bad:{this.state.bad}</li>
//                     <li>Total:{total}</li>
//                     <li>Positive feedback:{percentageOfPositiveFeedback}%</li>
//                 </ul>
//             </div>
            
//         )
//     };
// }


