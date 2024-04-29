/**
 * Права в командах работают по принципу "Одно из"
 *  channels - каналы в которых команда работает
 *  roles - одна из ролей, чтобы была у пользователя
 *  users - конкретные пользователи, что могут использовать команду
 *
 *  звёздочка означает, что доступно всем
 */

/**
 * Приоритет прав:
 * users => roles => categories => channels (при условии, что было заполнено всё, либо один из пунктов цепочки)
 */

/**
 * Актуально для тех, кто пишет приватных ботов
 */

export type CommandPermissionType = {
  channels: string[];
  roles: string[];
  users: string[];
  categories: string[];
};


export const PingPermission: CommandPermissionType = {
  channels: ["*"],
  roles: ["*"],
  users: ["*"],
  categories: ["*"],
};
