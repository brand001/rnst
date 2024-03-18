import React, { Component } from "react";
import {
	Dimensions,
	StatusBar,
	StyleSheet,
	Text,
	Image,
	View,
	NativeModules,
	TextInput,
	Platform,
} from "react-native";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import PiwikProSdk from "@piwikpro/react-native-piwik-pro-sdk";
import CodePush from "react-native-code-push";
import { RootSiblingParent } from 'react-native-root-siblings';
import SplashScreen from 'react-native-splash-screen'
import * as Sentry from "@sentry/react-native";
import { getSystemVersion } from 'react-native-device-info';

const AppReducer = combineReducers({
  
});
let store = createStore(AppReducer, applyMiddleware(thunk))



const { width, height } = Dimensions.get("window");

const sourceRender = Text.render;
Text.render = function render(props, ref) {
	return sourceRender.apply(this, [{ ...props, style: [{ fontFamily: 'PingFangTC-Regular' }, props.style] }, ref]);
};

Text.defaultProps = Object.assign({}, Text.defaultProps, { allowFontScaling: false })
TextInput.defaultProps = Object.assign({}, TextInput.defaultProps, { allowFontScaling: false })
const { Openinstall } = NativeModules

class App extends Component {
	constructor() {
		super();
		this.state = {
			
		};
	}

	componentDidMount() {
		CodePush.checkForUpdate('codepushkey').then(update => {})
		SplashScreen.hide()

		setTimeout(() => {
			if (Openinstall.getAffCode) {
				Openinstall.getAffCode(CODE => {
					alert('CODE1=>' + CODE)
				});
			}
		}, 5000);
	}



	render() {


		return (
			<Provider store={store}>
			<StatusBar barStyle={'dark-content'} />
				<RootSiblingParent>
					<View>
						<Text style={{color: 'red', fontSize: 50}}>test</Text>
						<Image
							resizeMethod={'resize'}
							resizeMode={'center'}
							source={{ uri: 'https://th.bing.com/th/id/R.d8dfd08893b58d08d74b38ad8870a48d?rik=FOH776EhG01I%2bA&riu=http%3a%2f%2fstatic.cntonan.com%2fuploadfile%2f2020%2f0318%2f20200318122901txdvkwgvpsw.jpg&ehk=2OKIaIz3xTccGgjf5DFKNDfJLcPfvXjuF%2bJbC6GJk6w%3d&risl=&pid=ImgRaw&r=0' }}
							style={{width: 150, height: 400}}
						/>
					</View>
				</RootSiblingParent>
			</Provider>
		);
	}
}


const codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };
export default CodePush(codePushOptions)(Sentry.wrap(App));


// https://cloudmiicorph011-my.sharepoint.com/:u:/g/personal/benji_lai_ogglobal_net/EcshWuqvT5JCoh-_doMpwxoBj8KIlzIb1D9Fsxq3BfS2vg?e=j5EqfQ


// npm i --legacy-peer-deps
// # android/app/src/main/java/com/TestST/soexample/opeinstall.java
// sed -i "" "s/TAG\ =\ \"\"/TAG\ =\ \"${ope_install_tag}\"/g" android/app/src/main/java/com/TestST/soexample/opeinstall.java
// # 查看opeinstall.java内容是否被替换
// cat android/app/src/main/java/com/TestST/soexample/opeinstall.java
// cd android && ./gradlew assembleRelease
// mv app/build/outputs/apk/release/app-release.apk ./
// cd ..

// cd ios
// pod install
// sed -i "" "6s/<string><\/string>/<string>"${info_plist_string_line_six}"<\/string>/" FedevProject/Info.plist
// sed -i "" "s/unary_function/__unary_function/" Pods/boost/boost/container_hash/hash.hpp
// cat FedevProject/Info.plist
// # 构建项目并生成.xcarchive文件
// xcodebuild -workspace FedevProject.xcworkspace -scheme FedevProject -sdk iphoneos -configuration Release clean archive -archivePath build/FedevProject.xcarchive

// # 导出.ipa文件
// xcodebuild -exportArchive -archivePath build/FedevProject.xcarchive -exportOptionsPlist exportOptions.plist -exportPath build/FedevProject.ipa

