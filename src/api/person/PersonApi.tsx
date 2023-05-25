import { HttpClient } from '../../core/http/HttpClient';
import { PersonCreditsAPI, PersonDetailsAPI } from './person.types';

class PersonAPIClass {
  public getDetails(id: string) {
    return HttpClient.get<PersonDetailsAPI>(`'/person/${id}`);
  }

  public getCredits(id: string) {
    return HttpClient.get<PersonCreditsAPI>(`'/person/${id}/combined_credits`);
  }
}

const PersonAPI = new PersonAPIClass();
export { PersonAPI };