import * as React from 'react';

import './PrinciplesBlock.scss';

const PrinciplesBlock = () => {
	return <div className="principles">
		<div className="principles__title">Наши принципы</div>
		<div className="principles__list">
			<div className="principles__element principle">
				<div className="principle__title">Гарантия качества</div>
				<div className="principle__description">Мы тщательно следим за качеством продаваемой продукции</div>
			</div>
			<div className="principles__element principle">
				<div className="principle__title">Честность</div>
				<div className="principle__description">Мы всегда рады диалогу с покупателями, обратная связь очень
					важна для нас
				</div>
			</div>
			<div className="principles__element principle">
				<div className="principle__title">Развитие</div>
				<div className="principle__description">Мы не стоим на месте: наши менеджеры всегда в курсе тенденций и
					новинок в мире техники
				</div>
			</div>
		</div>
	</div>;
};

export default React.memo(PrinciplesBlock);