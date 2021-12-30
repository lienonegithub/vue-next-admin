import request from '/@/utils/request';
import { AxiosResponse } from 'axios'

export interface LoginParam {
	username: string,
	password: string
}

export interface LoginResonse {
	token: string
}

/**
 * 用户登录
 * @param params 要传的参数值
 * @returns 返回接口数据
 */
export async function doLogin(params: LoginParam):Promise<AxiosResponse<LoginResonse>> {
	return request({
		url: '/login',
		method: 'post',
		data: params,
	});
}

/**
 * 用户退出登录
 * @param params 要传的参数值
 * @returns 返回接口数据
 */
export function signOut(params: object) {
	return request({
		url: '/user/signOut',
		method: 'post',
		data: params,
	});
}