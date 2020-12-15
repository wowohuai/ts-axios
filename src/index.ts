import { xhr} from '@/adapters/xhr';
import {AxiosRequestConfig} from '@/types';
import buildURL from '@/helpers/buildURL';

const  axios = (config: AxiosRequestConfig): void => {
  processConfig(config);
  xhr(config);
};


const processConfig = (config: AxiosRequestConfig): void => {
  config.url = transformURL(config);
};

const transformURL = (config: AxiosRequestConfig): string => {
  return buildURL(config.url, config.params);
};

export default axios;
