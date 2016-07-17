var CommentBox = React.createClass({
    render: function () {
      return (
      		<div className="commentBox">
      			Hello Word, i am a comment box. do you like me?
      			<h1> Comments</h1>
      			<CommentList />
      			<CommentForm />
      		</div>
      	);
    }
});


var CommentList = React.createClass({
	render: function () {
		return (
			<div className="commentList">
				Hello, world, I am just a commentlist.
			</div>
		)
	}
});


var CommentForm == React.createClass({
	render: function () {
		return (
			<div className="commentForm">
				Hello, I am a commentForm. I accept comments from you.
			</div>
		);
	}
});


var Comment = React.createClass({
	render: function () {
		return (
			<div className="comment">
				<h2 className="commentAuthor">
				{this.props.author}
				<h2>
				{this.props.children}
			</div>
		);
	}
});

ReactDOM.render(
	<CommentBox />,
	document.getElementById('content')
);