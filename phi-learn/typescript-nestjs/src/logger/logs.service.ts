import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Log from './log.entity';
import { Repository } from 'typeorm';
import CreateLogDto from './dto/createLog.dto';

@Injectable()
export class LogsService {
    constructor(
        @InjectRepository(Log)
        private logRepository: Repository<Log>,
    ) { }

    async createLog(log: CreateLogDto) {
        console.log('Log:::', log)
        // const newLog = await this.logRepository.create(log)

        // await this.logRepository.save(newLog, {
        //     data: {
        //         isCreatingLogs: true
        //     },
        // })

        // return newLog;
    }
}
