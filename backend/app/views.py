from app.models import Users
from app.serializer import UserSerializer
from rest_framework.response import Response
from rest_framework.views import APIView as ApiView

class UserView(ApiView):

    def get(self, request):
        users = Users.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
   

