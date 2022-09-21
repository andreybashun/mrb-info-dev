import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from "../store";
//import 'nextjs-breadcrumbs/dist/index.css'
import '../styles/breadcrumps.css'





const WrappedApp: FC<AppProps> = ({Component, pageProps}) =><Component {...pageProps} />;

export default wrapper.withRedux(WrappedApp);