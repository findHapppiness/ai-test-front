import axios, { ResponseType } from 'axios';

interface requestProps {
	contentType?: string;
	method?: string;
	url: string;
	reqData?: object;
	responseType?: ResponseType;
}

export const request = async ({
	contentType = 'application/json; charset=UTF-8',
	method = 'GET',
	url = '',
	reqData = {},
	responseType = 'json',
}: requestProps) => {
	return axios({
		headers: {
			'Content-Type': contentType,
		},
		method,
		url: `/${url}`,
		data: reqData,
		responseType,
	})
		.then((res) => {
			return { status: res.status, data: res.data };
		})
		.catch((err) => {
			return err.response.data;
		});
};
