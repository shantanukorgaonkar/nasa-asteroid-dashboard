
import BaseService from "../base.service";


class AsteroidService extends BaseService {

    async findAll(startDate: string, endDate: string): Promise<any> {
        return this.get<any>('/neo/rest/v1/feasded', { params: { start_date: startDate, end_date: endDate } });
    }
}

export default AsteroidService;