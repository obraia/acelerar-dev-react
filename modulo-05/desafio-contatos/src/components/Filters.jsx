import React from 'react';

export default function Filters({ onClickButton, onChangeInput }) {
	return (
		<div className="container" data-testid="filters">
			<section className="filters">
				<div className="filters__search">
					<input
						type="text"
						className="filters__search__input"
						placeholder="Pesquisar"
						onChange={e => onChangeInput(e.target.value)} />

					<button className="filters__search__icon">
						<i className="fa fa-search" />
					</button>
				</div>

				<button className="filters__item is-selected" onClick={() => onClickButton('name')}>
					Nome <i className="fas fa-sort-down" />
				</button>

				<button className="filters__item" onClick={() => onClickButton('country')}>
					País <i className="fas fa-sort-down" />
				</button>

				<button className="filters__item" onClick={() => onClickButton('company')}>
					Empresa <i className="fas fa-sort-down" />
				</button>

				<button className="filters__item" onClick={() => onClickButton('department')}>
					Departamento <i className="fas fa-sort-down" />
				</button>

				<button className="filters__item" onClick={() => onClickButton('admissionDate')}>
					Data de admissão <i className="fas fa-sort-down" />
				</button>
			</section>
		</div>
	);
}