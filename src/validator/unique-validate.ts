/*
import { PrismaService } from "src/prisma/prisma.service";

export abstract class uniqueValidate {
  constructor(private readonly prisma: PrismaService) {}

  abstract tableName: string;
  
  async dataExists(data: string): Promise<boolean> {
    const x = await this.prisma[this.tableName].findFirst({
      where: {data}
    })
  }
  
}
*/