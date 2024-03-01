//
//  openinstall.m
//  UMComponent
//
//  Created by Benjie Lai on 2018/11/26.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "openinstall.h"
#import <TInstallSDK/TInstallSDK.h>


@import Eagleeyes.DevicePrint;
@implementation Openinstall


RCT_EXPORT_MODULE();
//  对外提供调用方法,演示Callback

RCT_EXPORT_METHOD(getAffCode:(RCTResponseSenderBlock)callback)
{
  NSString * _Nullable FixedAffCode = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"AffCode"];
//  NSLog(@"123qwe%@", FixedAffCode);
  if(FixedAffCode.length != 0) {
    //写死固定代理码affcode
    callback(@[FixedAffCode]);
  } else {
    //TInstall代理码affcode
    [TInstall getWithInstallResult:^(NSDictionary * _Nullable data) {
        NSString *err = @"err";
        callback(@[err]);
    }];
  }
  
}

RCT_EXPORT_METHOD(getRafCode:(RCTResponseSenderBlock)callback)
{
  //推荐好友rafcode
  [TInstall getWithInstallResult:^(NSDictionary * _Nullable data) {
      NSString *rafErr = @"err";
      callback(@[rafErr]);  }];

}

RCT_EXPORT_METHOD(getPackageName:(RCTResponseSenderBlock)callback)
{
  //packageName
    NSString *packageName = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleIdentifier"];
    callback(@[packageName]);
  
}


RCT_EXPORT_METHOD(getE2BlackBox:(RCTResponseSenderBlock)callback)
{
  //E2
  dispatch_async(dispatch_get_main_queue(), ^{
    NSString *blackbox = [DevicePrint getBlackBox];
    callback(@[[NSNull null],blackbox]);
    
  });
}






@end
