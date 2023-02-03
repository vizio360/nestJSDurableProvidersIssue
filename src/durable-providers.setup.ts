import {
  ContextId,
  ContextIdFactory,
  ContextIdStrategy,
  HostComponentInfo,
} from '@nestjs/core';
import { Request } from 'express';

const tenants = new Map<string, ContextId>();

export class AggregateByTenantContextIdStrategy implements ContextIdStrategy {
  attach(contextId: ContextId, request: { req?: Request; headers? }) {
    const tenantId = request.req
      ? (request.req.headers['x-tenant-id'] as string)
      : request.headers['x-tenant-id'];
    let tenantSubTreeId: ContextId;

    if (tenants.has(tenantId)) {
      tenantSubTreeId = tenants.get(tenantId);
    } else {
      tenantSubTreeId = ContextIdFactory.create();
      tenants.set(tenantId, tenantSubTreeId);
    }

    return {
      resolve: (info: HostComponentInfo) => {
        const context = info.isTreeDurable ? tenantSubTreeId : contextId;
        return context;
      },
      payload: request,
    };
  }
}
