import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { withRouter } from 'next/router';

const NextLink = withRouter(({ router, children, className, onClick, replace = false, ...props }: any) => {
	const link = props.as ? props.as.split('?')[0] : props.href.split('?')[0];

	// console.log('router.asPath', router.asPath); // /choks?a=2134
	// console.log('router.pathname', router.pathname); // /choks
	// console.log('props.href.split("?")[0]', props.href.split('?')[0]);

	return (
		<Link replace={replace} {...props}>
			<a
				className={classnames(
					[
						(props.as || props.href) === router.asPath ? 'next-link-active next-link-active-exact' : '',
						link !== '/' && router.asPath.startsWith(link) ? 'next-link-active' : '',
					],
					className,
				)}
				onClick={(e) => onClick && onClick(e)}
			>
				{children}
			</a>
		</Link>
	);
});
export default NextLink;
