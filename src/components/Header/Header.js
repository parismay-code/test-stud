import * as React from 'react';

import './Header.scss';

const Header = () => {
	return <header className="header">
		<div className="header__logo logo">
			<div className="logo__title">master-tehno.ru</div>
			<div className="logo__subtitle">продажа вездеходов</div>
		</div>
		<nav className="header__navigation navigation">
			<ul className="navigation__list">
				<li className="navigation__element">
					<a href="#">Каталог</a>
				</li>
				<li className="navigation__element">
					<a href="#">Доставка и оплата</a>
				</li>
				<li className="navigation__element">
					<a href="#">Новости и акции</a>
				</li>
				<li className="navigation__element">
					<a href="#">Услуги и сервис</a>
				</li>
				<li className="navigation__element">
					<a href="#">Контакты</a>
				</li>
			</ul>
		</nav>
	</header>;
};

export default React.memo(Header);