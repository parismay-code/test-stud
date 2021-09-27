import * as React from 'react';

import './QuestionsBlock.scss';

const QuestionsBlock = () => {
	return <div className="questions">
		<div className="questions__title">Остались вопросы?<br/>Оставьте заявку, и мы Вам перезвоним</div>
		<form className="questions__form form" name="n_questionsForm" action="#" method="POST">
			<div className="form__title">Как Вас зовут?</div>
			<input className="form__input" name="n_questionsFirstname" type="text" placeholder="Ваше имя"/>
			<div className="form__title">Ваш номер телефона</div>
			<input className="form__input" name="n_questionsFirstname" type="tel" placeholder="8-9__-___-__-__"
			       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
			<input className="from__submit" type="submit" value="Перезвоните мне!"/>
		</form>
	</div>;
};

export default React.memo(QuestionsBlock);