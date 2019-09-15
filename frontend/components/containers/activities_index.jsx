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
                    onClick={() => this.updatePage(page + 1)}
                    className='update-pages'>
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                </div>
        );
        let prevIcon = (
            <div
                onClick={() => this.updatePage(page - 1)}
                className='update-pages'>
                <FontAwesomeIcon icon={faChevronCircleLeft} />
            </div>
        )

        return(
            <div className='activity-pages'>
                { page > 1 ? prevIcon : null}
                {this.pageNumbers(page, totalTrans)}
                {page === lastPage ? null : nextIcon}
            </div>
        )
    }

    render() {
        let { currentUser, users } = this.props;
        let { page } = this.state;
        let totalTrans = currentUser.num_trans;

        if (users === undefined || currentUser === undefined) return null;

        const transactions = this.props.transactions.map( transaction => {
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
                        {transactions.reverse()}
                    </ul>
                   {this.pageIcons(page, totalTrans)}
                </div>
            </div> 
        )
    }
}

export default ActivitiesIndex;