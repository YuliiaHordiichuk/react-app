import { httpClient } from '../../../core/http/HttpClient';
import { TVListResponse, QueryParams } from '../TV.types';

class TVListAPIClass {
  public getPopular(params?: QueryParams) {
    return httpClient.get<TVListResponse>('/tv/popular', params);
  }

  public getUpcoming(params?: QueryParams) {
    return httpClient.get<TVListResponse>('/tv/upcoming', params);
  }

  public getTrending(time_window: string, params?: QueryParams) {
    return httpClient.get<TVListResponse>(`/trending/tv/${time_window}`, params);
  }
}

const TVListAPI = new TVListAPIClass();
export { TVListAPI };