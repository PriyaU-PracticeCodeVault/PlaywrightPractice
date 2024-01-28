// 1. Define the Enum for Roles
enum Role {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer",
  }
  
  // 2. Define the Object Literal for Permissions
  const rolePermissions: any = {
    [Role.Admin]: { create: true, edit: true, delete: true },
    [Role.Editor]: { create: true, edit: true, delete: false },
    [Role.Viewer]: { create: false, edit: false, delete: false },
  };
  
  // 3. Define a function called hasPermission
  function hasPermission(role: Role, permission: string) {
    
    if (rolePermissions[role] === rolePermissions[role][permission]) {
        console.log(`${role} has ${permission} Permission: ${rolePermissions[role][permission]}`);
      } else {
        console.log(`${role} has ${permission} Permission: ${rolePermissions[role][permission]}`);
      }
  }

  hasPermission(Role.Admin, 'delete');
  hasPermission(Role.Editor, 'delete');
  hasPermission(Role.Viewer, 'delete');
  hasPermission(Role.Viewer, 'edit');
  hasPermission(Role.Editor, 'create');
  