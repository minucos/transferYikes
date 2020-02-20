import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import ActivitiesIndexItem from './activities_index_item';
import ActivityBar from './activities_bar';

class ActivitiesIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
        }
    }

    componentDidMount() {
        let { fetchTransactions, fetchUser, currentUserId } = this.props;
        fetchTransactions(this.state.page)
            .then(() => fetchUser(currentUserId));
    }

    componentWillUnmount() {
        this.props.clearTransactions(this.props.currentUserId);
    }

    updatePage(page) {
        let { fetchTransactions } = this.props;
        let totalTrans = this.props.currentUser.num_trans;
        let maxPages = Math.floor(totalTrans / 15) + 1

        page = page > maxPages ? maxPages : page;

        if (page > 0 ) {
            fetchTransactions(page).then(
                () => this.setState({ page: page })
            )
        }
    }

    pageNumbers(page, totalTrans) {
        const fromTrans = page * 15 - 14;
        const toTrans = page * 15 > totalTrans ? totalTrans : page * 15;

        return(
            <div>
                {fromTrans}-{toTrans} of {totalTrans}
            </div>
        )
    }

    pageIcons(page, totalTrans) {
        let lastPage = Math.floor(totalTrans / 15) + 1
        let nextIcon = (
                <div
                    onClick={ page === lastPage ? null : () => this.updatePage(page + 1)}
                    className={ page === lastPage ? 'hide' : 'update-pages'}>
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                </div>
        );
        let prevIcon = (
            <div
                onClick={ page > 1 ? () => this.updatePage(page - 1) : null}
                className={ page > 1 ? 'update-pages' : 'hide'}>
                <FontAwesomeIcon icon={faChevronCircleLeft} />
            </div>
        )

        return(
            <div className='activity-pages'>
                {prevIcon}
                {this.pageNumbers(page, totalTrans)}
                {nextIcon}
            </div>
        )
    }

    render() {
        let { currentUser, users, transactions } = this.props;
        let { page } = this.state;
        let totalTrans = currentUser.num_trans;

        if (transactions.length === 0) return null;
        console.log(this.state.page);
        const transactionsList = transactions.map( transaction => {
           return(
                <ActivitiesIndexItem
                    key={transaction.id}
                    t={transaction}
                    currentUser={currentUser}
                    users={users}
                />
           )
        });

        return(
            <div className='activity-container'>
                <ActivityBar />
                <div className='activity-detail'>
                    <h1>History</h1>
                    <ul className='activity-list'>
                        {transactionsList.reverse()}
                    </ul>
                   {this.pageIcons(page, totalTrans)}
                </div>
            </div> 
        )
    }
}

export default ActivitiesIndex;