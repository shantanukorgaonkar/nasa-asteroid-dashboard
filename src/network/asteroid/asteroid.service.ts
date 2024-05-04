
import BaseService from "../base.service";


class AsteroidService extends BaseService {

    async findAll(startDate: string, endDate: string): Promise<any> {
        return this.get<any>('/neo/rest/v1/feed', { params: { startDate, endDate } });
    }

    // public async create(): Promise<any> {
    //     return this.post<any>('/reviews/');
    // }

    // public async update(id: number,): Promise<any> {
    //     return this.put<any>(`/reviews/${id}`);
    // }

    // public async remove(id: number): Promise<void> {
    //     return this.delete<void>(`/reviews/${id}`);
    // }
}

export default AsteroidService;