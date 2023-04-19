from django.db import migrations
from api.user.models import CustomUser


class Migration(migrations.Migration):
    def seed_data(apps, schema_editor):
        user = CustomUser(name="Tohid",
                          email="ttonkaboni@gmail.com",
                          is_staff=True,
                          is_superuser=True,
                          phone="09112218041",
                          gender="Male"
                          )
        user.set_password("123")
        user.save()

    dependencies = [

    ]

    operations = [
        migrations.RunPython(seed_data),
    ]
