import React from 'react';

const INITIAL_STATE = {
  email: '',
  grade: 0,
  comment: '',
};

class Comments extends React.Component {
  state = INITIAL_STATE;

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSendClick = () => {
    const commentsSaved = JSON.parse(localStorage.getItem('comments'));

    if (!commentsSaved) {
      localStorage.setItem('comments', JSON.stringify([this.state]));
    } else {
      localStorage.setItem(
        'comments',
        JSON.stringify([...commentsSaved, this.state]),
      );
    }

    this.setState(INITIAL_STATE);
  };

  render() {
    const { email, comment } = this.state;
    const comments = JSON.parse(localStorage.getItem('comments'));

    return (
      <div className="flex justify-end mr-[170px] mt-[-200px]">
        <div className="flex items-center justify-center w-[500px]">
          <form className="flex flex-col gap-2">
            <label htmlFor="email">
              Email:
              <input
                className="ml-2 w-[300px] px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                data-testid="product-detail-email"
                type="email"
                name="email"
                id="email"
                value={ email }
                onChange={this.handleChange}
                placeholder="digite o seu email"
              />
            </label>
            <label htmlFor="grade" className="flex items-center gap-1" onChange={ this.handleChange }>
              Nota:
              <input
                data-testid="1-rating"
                type="radio"
                name="grade"
                id="grade"
                value="1"
              />
              {' '}
              1
              <input
                data-testid="2-rating"
                type="radio"
                name="grade"
                id="grade"
                value="2"
              />
              {' '}
              2
              <input
                data-testid="3-rating"
                type="radio"
                name="grade"
                id="grade"
                value="3"
              />
              {' '}
              3
              <input
                data-testid="4-rating"
                type="radio"
                name="grade"
                id="grade"
                value="4"
              />
              {' '}
              4
              <input
                data-testid="5-rating"
                type="radio"
                name="grade"
                id="grade"
                value="5"
              />
              {' '}
              5
            </label>
            <label htmlFor="comment" className="flex flex-col gap-1">
              Comentários:
              <textarea
                className="resize-none w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                data-testid="product-detail-evaluation"
                name="comment"
                id="comment"
                value={ comment }
                onChange={ this.handleChange }
              />
            </label>
            <button
              className="m-auto w-[200px] px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
              data-testid="submit-review-btn"
              type="button"
              onClick={ this.handleSendClick }
            >
              Enviar
            </button>
            {comments
              && comments.map((commentLocal, index) => (
                <div key={ index } className="text-center mt-5">
                  <p>{commentLocal.email}</p>
                  <p>
                    Nota:
                    {' '}
                    {commentLocal.grade}
                  </p>
                  <p>{commentLocal.comment}</p>
                </div>
              ))}
          </form>
        </div>
      </div>
    );
  }
}

export default Comments;
