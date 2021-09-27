import * as React from 'react';

import './InfoBlock.scss';

const InfoBlock = () => {
	return <div className="info">
		<div className="info__header">Интернет-магазин зимней техники "Мастер-техно"</div>
		<div className="info__content">
			<div className="info__image"/>
			<div className="info__block info-block">
				<div className="info-block__title">Почему именно мы?</div>
				<div className="info-block__text">
					текст текст текст текст текст текст текст текст текст текст текст текст
					текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
					текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
					текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
					текст текст текст текст текст текст текст текст текст текст
				</div>
				<div className="info-block__submit">К покупкам!</div>
			</div>
		</div>
	</div>;
};

export default React.memo(InfoBlock);