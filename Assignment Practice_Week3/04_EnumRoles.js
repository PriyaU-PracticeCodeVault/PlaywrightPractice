var _a;
// 1. Define the Enum for Roles
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["Editor"] = "Editor";
    Role["Viewer"] = "Viewer";
})(Role || (Role = {}));
// 2. Define the Object Literal for Permissions
var rolePermissions = (_a = {},
    _a[Role.Admin] = { create: true, edit: true, delete: true },
    _a[Role.Editor] = { create: true, edit: true, delete: false },
    _a[Role.Viewer] = { create: false, edit: false, delete: false },
    _a);
// 3. Define a function called hasPermission
function hasPermission(role, permission) {
    if (rolePermissions[role] === rolePermissions[role][permission]) {
        console.log("".concat(role, " has ").concat(permission, " Permission: ").concat(rolePermissions[role][permission]));
    }
    else {
        console.log("".concat(role, " has ").concat(permission, " Permission: ").concat(rolePermissions[role][permission]));
    }
}
hasPermission(Role.Admin, 'delete');
hasPermission(Role.Editor, 'delete');
hasPermission(Role.Viewer, 'delete');
hasPermission(Role.Viewer, 'edit');
hasPermission(Role.Editor, 'create');
