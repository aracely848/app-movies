import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import CardList from '../card-list/CardList';
import classnames from 'classnames';
import './movies.scss';

const Movies = (props) => {
	const [ activeTab, setActiveTab ] = useState('1');
	const [ filteredMovies, setFilteredMovies ] = useState(props.movies);

	const handleToggle = (tab) => {
		if (activeTab !== tab) {
			setActiveTab(tab);
		}
		switch (tab) {
			case '1':
				setFilteredMovies(props.movies);
				break;
			case '2':
				setFilteredMovies(props.movies.filter((movie) => movie.new, 10));
				break;
			case '3':
				setFilteredMovies(props.movies.filter((movie) => movie.popular, 10));
				break;
			case '4':
				setFilteredMovies(props.movies.filter((movie) => movie.trend, 10));
				break;
			case '5':
				setFilteredMovies(props.movies.filter((movie) => movie.favorite, 10));
				break;
			case '6':
				setFilteredMovies(props.movies.filter((movie) => movie.recommendation, 10));
				break;
			default:
				setFilteredMovies(props.movies);
				break;
		}
	};

	return (
		<section className="movies">
			<Nav tabs>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '1' })}
						onClick={() => {
							handleToggle('1');
						}}
					>
						All
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '2' })}
						onClick={() => {
							handleToggle('2');
						}}
					>
						New Releases
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '3' })}
						onClick={() => {
							handleToggle('3');
						}}
					>
						Most Popular
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '4' })}
						onClick={() => {
							handleToggle('4');
						}}
					>
						Trends
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '5' })}
						onClick={() => {
							handleToggle('5');
						}}
					>
						My favorites
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '6' })}
						onClick={() => {
							handleToggle('6');
						}}
					>
						Recommendations
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={activeTab}>
				<TabPane tabId="1">
					<Row>
						<CardList movies={filteredMovies} />
					</Row>
				</TabPane>
				<TabPane tabId="2">
					<Row>
						<CardList movies={filteredMovies} />
					</Row>
				</TabPane>
				<TabPane tabId="3">
					<Row>
						<CardList movies={filteredMovies} />
					</Row>
				</TabPane>
				<TabPane tabId="4">
					<Row>
						<CardList movies={filteredMovies} />
					</Row>
				</TabPane>
				<TabPane tabId="5">
					<Row>
						<CardList movies={filteredMovies} />
					</Row>
				</TabPane>
				<TabPane tabId="6">
					<Row>
						<CardList movies={filteredMovies} />
					</Row>
				</TabPane>
			</TabContent>
		</section>
	);
};

export default Movies;
