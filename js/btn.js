'use strict';

const e = React.createElement;

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }
    render() {
        if (this.state.liked) {
            return 'You liked comment number ' + this.props.commentID;
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: false }) },
            'Like'
        );
    }

}
document.querySelectorAll('.btn_container')
    .forEach(domContainer => {
        // Read the comment ID from a data-* attribute.
        const commentID = parseInt(domContainer.dataset.commentid, 10);
        const root = ReactDOM.createRoot(domContainer);
        root.render(
            e(Button, { commentID: commentID })
        );
    });