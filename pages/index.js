import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
//import Blog from "./blog";
import Head from 'next/head';

const Productnpm  = dynamic(() => import('./product'), {
	loading: () => <div>loading...</div>
})

const App = () => (
	<div> 
		<Head>
			<title>Dave Rules the HTML HEAD!</title>
			<link href="/static/css/index.css" rel="stylesheet" />
			<link href="/static/css/unsemantic-grid-responsive-tablet-no-ie7.css" rel="stylesheet" />
			<link href="/static/css/unsemantic.css" rel="stylesheet" />
			<link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
		</Head>
		<h2 className="daveRule">Welcome to Next.js</h2>
		<Link href="/product"><a>Product Page</a></Link><br />
		<Link href="/main"><a>Main Page Test Page Page</a></Link><br />
	</div>
);

export default App;

